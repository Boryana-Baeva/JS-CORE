function rotate(input) {
    let rotations = input.pop();
    let remainder = rotations % input.length;
    while (remainder > 0){
        input.unshift(input.pop());
        remainder --;
    }
    console.log(input.join(' '));
}

rotate(["1","2","3","4","2"]);
rotate(["Banana","Orange","Coconut","Apple","15"]);