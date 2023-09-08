function calculateProbability() {
    const datScore = parseFloat(document.getElementById('datScore').value);
    const gpa = parseFloat(document.getElementById('gpa').value);

    let acceptanceLabel;

    if (gpa < 3.0) {
        acceptanceLabel = "Low"; // If GPA is below 3.0, set probability to low
    } else if (datScore === 25) {
        switch(gpa) {
            case 4:
            case 3.9:
            case 3.8:
            case 3.7:
                acceptanceLabel = "Very High";
                break;
            case 3.6:
            case 3.5:
                acceptanceLabel = "High";
                break;
            case 3.4:
            case 3.3:
                acceptanceLabel = "Moderate";
                break;
            case 3.2:
            case 3.1:
            case 3:
                acceptanceLabel = "Moderate";
                break;
            case 2.9:
                acceptanceLabel = "Low";
                break;
            case 2.8:
                acceptanceLabel = "Low";
                break;
            case 2.7:
                acceptanceLabel = "Low";
                break;
            default:
                acceptanceLabel = "Invalid Combination";
        }
    } else if (datScore === 27) {
        switch(gpa) {
            case 4:
            case 3.9:
            case 3.8:
            case 3.7:
            case 3.6:
            case 3.5:
                acceptanceLabel = "Very High";
                break;
            case 3.4:
                acceptanceLabel = "High";
                break;
            case 3.3:
                acceptanceLabel = "High";
                break;
            case 3.2:
                acceptanceLabel = "Moderate";
                break;
            case 3.1:
                acceptanceLabel = "Moderate";
                break;
            case 3:
                acceptanceLabel = "Moderate";
                break;
            case 2.9:
                acceptanceLabel = "Low";
                break;
            case 2.8:
                acceptanceLabel = "Low";
                break;
            case 2.7:
                acceptanceLabel = "Low";
                break;
            default:
                acceptanceLabel = "Invalid Combination";
        }
    } else if (datScore === 23) {
        switch(gpa) {
            case 4:
            case 3.9:
            case 3.8:
            case 3.7:
            case 3.6:
            case 3.5:
                acceptanceLabel = "Very High";
                break;
            case 3.4:
            case 3.3:
            case 3.2:
            case 3.1:
            case 3:
                acceptanceLabel = "High";
                break;
            case 2.9:
            case 2.8:
            case 2.7:
                acceptanceLabel = "Low";
                break;
            default:
                acceptanceLabel = "Invalid Combination";
        }
    } else if (datScore === 22) {
        switch(gpa) {
            case 4:
            case 3.9:
            case 3.8:
            case 3.7:
                acceptanceLabel = "Very High";
                break;
            case 3.6:
            case 3.5:
            case 3.4:
                acceptanceLabel = "High";
                break;
            case 3.3:
            case 3.2:
            case 3.1:
            case 3:
                acceptanceLabel = "Moderate";
                break;
            case 2.9:
            case 2.8:
            case 2.7:
                acceptanceLabel = "Low";
                break;
            default:
                acceptanceLabel = "Invalid Combination";
        }
    } else {
        acceptanceLabel = "Invalid DAT Score";
    }

    const result = document.getElementById('result');
    result.innerHTML = `<h2>Acceptance Label:</h2><p>Your acceptance label is ${acceptanceLabel}</p>`;
}


