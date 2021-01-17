const add2 = (n) => {
    if(typeof n !== 'number' ){
        return null
    }
   return n + 2;
};

const calcTax = (price) => {
    return price * 1.1;
};

module.exports = {
    add2,
    calcTax
};