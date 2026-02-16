let hostScore = 0;
let guestScore = 0;

function addLeadingSpace(newScore) {
    if (newScore.length < 2)
        newScore = " " + newScore;
    return newScore;
}

function increment(host, inc) {
    let scoreElement = document.getElementById(host ? "home-score" : "guest-score");
    
    if (host) {
        hostScore += inc;
        hostScore = Math.min(99, hostScore);
    }
    else {
        guestScore += inc;
        guestScore = Math.min(99, guestScore);
    }

    let newScore = (host ? hostScore : guestScore).toString();
    newScore = addLeadingSpace(newScore);
    scoreElement.textContent = newScore;
}