function fortune() {
    num = Math.random();

    if (num < 0.1) {
        alert("凶");
    } else if(num < 0.33) {
        alert("小吉");
    } else if(num < 0.66) {
        alert("中吉");
    } else {
        alert("大吉");
    }
}