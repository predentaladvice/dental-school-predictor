function calculateProbability() {
    var datScore = parseFloat(document.getElementById('datScore').value);
    var gpa = parseFloat(document.getElementById('gpa').value);

    var result = "Low"; // Default result is "Low"

    if (datScore >= 25 && datScore <= 30) {
        if (gpa >= 3.3) {
            result = "Very High";
        } else if (gpa >= 3.1 && gpa <= 3.29) {
            result = "High";
        } else if (gpa >= 2.9 && gpa <= 3.09) {
            result = "Moderate";
        } else {
            result = "Low";
        }
    } else if (datScore == 24) {
        if (gpa >= 3.4) {
            result = "Very High";
        } else if (gpa >= 3.2 && gpa <= 3.39) {
            result = "High";
        } else if (gpa >= 3 && gpa <= 3.19) {
            result = "Moderate";
        } else {
            result = "Low";
        }
    } else if (datScore == 23) {
        if (gpa >= 3.5) {
            result = "Very High";
        } else if (gpa >= 3.3 && gpa <= 3.49) {
            result = "High";
        } else if (gpa >= 3 && gpa <= 3.29) {
            result = "Moderate";
        } else {
            result = "Low";
        }
    } else if (datScore == 22) {
        if (gpa >= 3.7) {
            result = "Very High";
        } else if (gpa >= 3.4 && gpa <= 3.69) {
            result = "High";
        } else if (gpa >= 3 && gpa <= 3.39) {
            result = "Moderate";
        } else {
            result = "Low";
        }
    } else if (datScore == 21) {
        if (gpa >= 3.7) {
            result = "Very High";
        } else if (gpa >= 3.4 && gpa <= 3.69) {
            result = "High";
        } else if (gpa >= 3 && gpa <= 3.39) {
            result = "Moderate";
        } else {
            result = "Low";
        }
    } else if (datScore == 20) {
        if (gpa >= 3.9) {
            result = "Very High";
        } else if (gpa >= 3.5 && gpa <= 3.89) {
            result = "High";
        } else if (gpa >= 3 && gpa <= 3.49) {
            result = "Moderate";
        } else {
            result = "Low";
        }
    } else if (datScore == 19) {
        if (gpa >= 3.8) {
            result = "High";
        } else if (gpa >= 3.3 && gpa <= 3.79) {
            result = "Moderate";
        } else {
            result = "Low";
        }
    } else if (datScore == 18) {
        if (gpa >= 3.8) {
            result = "Moderate";
        } else {
            result = "Low";
        }
    }

    document.getElementById('result').style.display = 'block';
    document.getElementById('acceptanceOddsTitle').textContent = "Acceptance Odds";
    document.getElementById('acceptanceOddsLabel').textContent = result;
}
