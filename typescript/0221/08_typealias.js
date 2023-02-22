let ABC = function (x, y) {
    return x + y;
};
let MemberInfo = {
    name: "kim",
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log("안녕");
    },
};
MemberInfo.plusOne(1);
MemberInfo.changeName();
let cutZero = function (x) {
    let result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    let result = x.replace(/-/g, "");
    return parseFloat(result);
}
function func5(x, func1, func2) {
    let result = func1(x);
    let result2 = func2(result);
    console.log(result2);
}
func5("010-1111-2222", cutZero, removeDash);
