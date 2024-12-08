var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName:"Vasyl`",
        lastName:"Zhadan",
        email:"vasia@gmail.com"
    },
];

function ValidateEmails(inArr){
    const pattern = /^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)?@(?:gmail\.com|yahoo\.com)$/;
    var outArr = [];
    inArr.forEach(element => {
        const result = element.email.match(pattern);
        if(result){
            outArr.push(element);
        }
    });
    return outArr;
}

console.log(ValidateEmails(arr));