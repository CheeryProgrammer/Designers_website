function mainPageClickHadler() {
    setVisibility("mainPage", "block");
    setVisibility("feedback", "none");
    setVisibility("albums", "none");
}

function albumsClickHadler() {
    setVisibility("mainPage", "none");
    setVisibility("feedback", "none");
    setVisibility("albums", "block");
}

function feedbackClickHadler() {
    setVisibility("mainPage", "none");
    setVisibility("feedback", "block");
    setVisibility("albums", "none");
}

function setVisibility(id, display) {
    document.getElementById(id).style.display = display;
}

function sendFeedback() {
    if (document.getElementById("textarea").value.length < 20) {
        alert("Well, seems like you are not about talking too much. I like it!")
    } else {
        alert("Thank you a bunch for your feedback! You are awesome!");
    }
}
