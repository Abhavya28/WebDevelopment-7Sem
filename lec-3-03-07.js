// // console.log("Start Script");

// function walkInRes(cb){
//     console.log("I am going in the restraunt.");
//     setTimeout(cb,2000);
// }

// function checkMenu(cb){
//     console.log("Checking the menu.");
//     setTimeout(cb,5000);
// }

// function orderFood(cb){
//     console.log("Having Lunch");
//     setTimeout(cb,6000);
// }

// function havingLunch(cb){
//     console.log("Checking the menu.");
//     setTimeout(cb,5000);
// }

// function  payBill(cb){
//     console.log("I am paying the bill.");
//     setTimeout(cb,6000);
// }

// function  walkout(cb){
//     console.log("I am walking out.");
// }


// walkInRes(() => {
//     checkMenu(() => {
//         orderFood(() => {
//             havingLunch(() => {
//                 payBill(() => {
//                     walkout();
//                 });
//             });
//         });
//     });
// });

// // console.log("Something");
// // console.log("Something");
// // console.log("End Script");

//-----------------------------------------------------------------------------------------

//CallBack Ques
//1 cart - var card = shoes,clothes,watches
//2 func create order(cart) -> 5 items * 1000 => return orderId and price
//3 func placeorder(orderId,price) -> generate payemnt 
//4 func payment(orderId,price) -> return success
//5 func ordercreated msg(orderId) -> return order no,order id,order status

var cart = ["shoes", "clothes", "watches"];

function createOrder(cart, cb) {
    const noOfItem = cart.length;
    const price = noOfItem * 1000;
    console.log(`Creating order for ${noOfItem} items - ${cart.join(", ")} with total price of ${price}`);
    setTimeout(() => cb(noOfItem, price), 2000);
}

function placeOrder(noOfItem, price, cb) {
    const orderId = Math.floor(Math.random() * 10000); 
    console.log(`Placing order with Order Id: ${orderId}`);
    setTimeout(() => cb(orderId), 2000);
}

function orderPayment(orderId, price, noOfItem, cb) {
    console.log("Order Placed Successfully");
    setTimeout(cb, 2000);
}

function orderStatus(orderId, price) {
    console.log(`Order with Order Id: ${orderId} and Price: ${price} has been placed successfully.`);
}

createOrder(cart, (noOfItem, price) => {
    placeOrder(noOfItem, price, (orderId) => {
        orderPayment(orderId, price, noOfItem, () => {
            orderStatus(orderId, price);
        });
    });
});
