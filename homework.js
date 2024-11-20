var services = {
    "стрижка": "60",
    "гоління": "80",
    "Миття голови": "100",
    price: function() {
        var values = Object.values(this);
        var result = 0;
        for(let i = 0; i < values.length; i++) {
            var num = Number(values[i]);
            if(!isNaN(num)){
                result += num;
            }
        }
        console.log('Price: ', result);
    },
    minPrice: function() {
        var values = Object.values(this);
        var result = Number(values[0]);
        for(let i = 1; i < values.length; i++) {
            var num = Number(values[i]);
            if(!isNaN(num) && num < result){
                result = num;
            }
        }
        console.log('Min Price: ', result);
    },
    maxPrice: function() {
        var values = Object.values(this);
        var result = Number(values[0]);
        for(let i = 1; i < values.length; i++) {
            var num = Number(values[i]);
            if(!isNaN(num) && num > result){
                result = num;
            }
        }
        console.log('Max Price: ', result);
    }
};
    

services.price();
services.minPrice();
services.maxPrice();