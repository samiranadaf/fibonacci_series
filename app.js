function fibonacci(num) {
    if (num === 1) {
        return [0, 1];
    }
    else {
        sum = fibonacci(num - 1);

        sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
        return sum;
    }
}
console.log(fibonacci(8));