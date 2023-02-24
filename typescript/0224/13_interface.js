let square = { color: "red", width: 100 };
// &는 합치는게 아니라 왼쪽 오른쪽 둘 다 만족하는 타입이다
let cat = { name: "kim", age: 20 };
let product = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
let cart = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
let obj = {
    plus(x, y) {
        return x + y;
    },
    minus(x, y) {
        return x - y;
    },
};
