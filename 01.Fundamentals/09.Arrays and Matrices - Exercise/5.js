function extractNonDecreasing(input) {
    input.filter((a, b) => a - b >= 0).forEach(x => console.log(x));
}
extractNonDecreasing(["1", "3", "8", "4", "10", "12", "3", "2", "24"]);
console.log();
extractNonDecreasing(["1","2","3","4"]);
console.log();
extractNonDecreasing(["20","3","2","15","6","1"]);