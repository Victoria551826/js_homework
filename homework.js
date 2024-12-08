var arr = [
    'Wonderful', 'Joyful', 'Happiness', 'Time', 'Task', 'Apple', 'Thanks', 'Independent'
];

function ValidateArray(inArr){
    const pattern = /\b[^aA\s]{6,}\b/;
    var outArr = [];
    inArr.forEach(element => {
        const result = element.match(pattern);
        if(result){
            outArr.push(element);
        }
    });
    return outArr;
}

console.log(ValidateArray(arr));