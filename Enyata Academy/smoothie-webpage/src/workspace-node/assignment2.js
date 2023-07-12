let firstprice = 1000;
let qty = 7;

console.log(firstprice)
console.log(qty)
let discount=(firstprice *(20/100));
let discountedprice= (firstprice-=discount);

qty++ 

let priceall=(discountedprice * qty);

discountedprice=(`${discountedprice}`);

qty=(`${qty}`);

console.log(`totalPrice= ${priceall}`);


