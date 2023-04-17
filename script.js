const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const formatOptions = { year: "numeric", month: "long", day: "numeric" };

var month = document.getElementById("month");
var day = document.getElementById("day");
var weekday = document.getElementById("weekday");
var result = document.getElementById("result");

month.addEventListener("input", () => limitDay());
day.addEventListener("change", () => limitDay());

var btn = document.getElementById("calc");
btn.addEventListener("click", () => {
    const m = month.value;
    const d = day.value;
    const w = weekday.value;
    var date;

    const thisYear = new Date().getUTCFullYear();

    for (let year = thisYear; year < thisYear + 100; year++) {
        if (m === "Every month") {
            for (let n = 0; n < 12; n++) {
                date = new Date(year, n, d);
                let dayName = dayNames[date.getDay()];
                if (dayName === w && date > new Date()) {
                    result.innerText = date.toLocaleDateString("en-US", formatOptions);

                    break;
                }
            }

            break
        }

        date = new Date(year, monthNames.indexOf(m), d);
        let dayName = dayNames[date.getDay()];
        console.log(date, new Date(), date > new Date(), "awdaw");
        if (dayName === w && date > new Date()) {
            result.innerText = date.toLocaleDateString("en-US", formatOptions);

            break;
        }
    }
});

function limitDay() {
    if (month.value !== "Every month") {
        day.max = new Date(2000, monthNames.indexOf(month.value) + 1, 0).getDate();
    } else {
        day.max = 31;
    }

    day.value = Math.min(day.max, day.value);
}
