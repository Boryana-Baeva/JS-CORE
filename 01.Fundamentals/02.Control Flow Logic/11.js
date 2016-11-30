function binaryLogarithm(nums) {
    for (let x of nums){
        let result = Math.log2(x);
        console.log(result);
    }
}

binaryLogarithm([1024]);