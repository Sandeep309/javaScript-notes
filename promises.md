# promises

Created: January 1, 2024 12:31 AM
Tags: Theory

## What is Promise?

- A promise is an object that represents eventual completion/failure of an asynchronous operation.
- A promise has 3 states: pending | fulfilled | rejected.
- As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
- A promise resolves only once and it is immutable.
- Using `.then()` we can control when we attach a callback() function.

## Advantages of Promises

- Before promises we used to depend on callback functions which would result in
    1. Callback Hell (Pyramid of doom),
    2. Inversion of control
- Inversion of control is overcome by using promise.
- To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using `.then()`
- A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next `.then()`

### Examples:

```jsx
const cart = ["shoe", "tshirt", "pants"];

// Callback example code expands vertically 
createOrder(cart, function (orderId) {
  proccedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateUserWallet();
    });
  });
});

// Promise example code expands horizontally 
createOrder(cart)
.then(function (orderId){
		return proccedToPayment(orderId)
})
.then(function (paymentInfo){
	return showOrderSummary(paymentInfo)
})
.then(function (paymentInfo){
	return updateWalletbalance(paymentInfo);
})
```