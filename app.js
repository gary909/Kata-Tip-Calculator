function calculateTip(amount, rating) {
    rating = rating.toLowerCase();
    if (rating === "excellent") {
        return Math.ceil((amount / 100) * 20);
    } else if (rating === "great") {
        return Math.ceil((amount / 100) * 15);
    } else if (rating === "good") {
        return Math.ceil((amount / 100) * 10);
    } else if (rating === "poor") {
        return Math.ceil((amount / 100) * 5);
    } else if (rating === "terrible") {
        return Math.ceil((amount / 100) * 0);
    } else {
        return "Rating not recognised"
    }
}

console.log(calculateTip(20, "Excellent")); // 4
console.log(calculateTip(26.95, "good")); // 3