

function lea() {
    var mission = prompt("איזו מטלה צריך לעשות עכשיו בבית ואת רוצה שאחד הילדים יעשה?");
    var childList = [];
    var childMore = prompt("איזה ילד זמין לך עכשיו לעשות את המטלה הזו?").toLowerCase();
    childList.push(childMore);
    var moreChild = confirm("יש עוד ילד פנוי בסביבה?");
    while (moreChild) {
        var childMoreMore = prompt("איזה?").toLowerCase();
        childList.push(childMoreMore);
        var answer = confirm("יש עוד?");
        if (answer) {
            moreChild = true;
        }
        else {
            moreChild = false;
        }
    }
    var child = childList[Math.round(Math.random() * (childList.length - 1))];
    alert(child + " " + "קיבל/ה את המשימה" + " " + mission + " " + "בבקשה לעשות אותה בשמחה ובזריזות!");
}


document.getElementById("my").
    addEventListener
    ("mouseover", lea);