function sumPendingOrders(orders) {
    const sum = orders
        .filter(function (o) {
            return o.status === 'pending';
        })
        .map(function (o) {
            return o.price;
        })
        .reduce(function (a, b) {
            return a + b;
        }, 0);

    return sum === 0 ? 'no pending orders' : sum;
}

const order = [
    { price: 45.0, status: "processed" },
    { price: 20.0, status: "pending" },
    { price: 60.0, status: "pending" },
    { price: 15.0, status: "processed" }
];

console.log(sumPendingOrders(order));       // 80