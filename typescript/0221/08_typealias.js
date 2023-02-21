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
