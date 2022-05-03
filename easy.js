//easy
function exercise (e){
    function display(excerciseName){
        console.log(excerciseName)
    }
    return display;
}
var run = exercise(`running`);
console.log(run())
var swim = exercise(`swimming`);
console.log(swim());
