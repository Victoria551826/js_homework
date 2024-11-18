const flower = {
    type: 'Tulip',
    color: 'Red',
    height: 50
};

flower.getInfo = function() {
    console.log("Gdtting object info:");
    var keys = Object.keys(this);
    for(let i = 0; i < keys.length; i++){
        console.log(keys[i], " = ", this[keys[i]]);
    }
    
};

flower.getInfo();
flower.owner = "Vika";
flower.getInfo();
