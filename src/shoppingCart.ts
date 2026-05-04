type CartItem ={
    name:string;
    price:number;
    quantity?:number;
};

const cartitem : CartItem ={name: "chips", price:20, quantity:4};
// const {price, quantity}= {CartItem}; 

// const {price, quantity}= cartitem; 

// const calculationTotal =({price,quantity=1}: cartitem):number =>
// { return price*quantity};


const calculationTotal =({price=30,quantity=1}: CartItem):number =>
{ 
    // console.log(price*quantity);
    return price*quantity;

};

console.log(calculationTotal);