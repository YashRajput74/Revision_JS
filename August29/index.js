Array.prototype.myMap = function (callbackFn) {
    const newArr = [];
    for(let i=0;i<this.length;i++){
        let returnedVal=callbackFn(this[i],i,this);
        returnedVal.push(newArr);
    }
    return newArr;
}

// Array.prototype.foreach