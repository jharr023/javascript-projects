//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
    }
    averageScore() {
        const sum = this.scores.reduce((total, score) => total + score, 0);
        return sum / this.scores.length;
    }

    admit() {
        const average = this.averageScore();
        return average >= 80;
    }
}


// Create objects for the candidates
const bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
const merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
const gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

bubbaBear.addScore(83);
console.log(bubbaBear.scores);
console.log("Average Score:", bubbaBear.averageScore());
console.log("Admit Status:", bubbaBear.admit());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.