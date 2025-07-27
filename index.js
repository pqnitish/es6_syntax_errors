const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    // Coerce string to number if needed
    let price = parseFloat(item.price);

    if (isNaN(price)) {
      console.error("Invalid price. Please enter a numeric value.");
      return;
    }

    item.price = price; // Store the coerced number value
    this.items.push(item);
    this.total += price;
    console.log(`Added "${item.name}" with price $${price.toFixed(2)}`);
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};

// ✅ Test calls
checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // String, but valid
checkout.addItem({ name: "Milk", price: 3.50 });            // Valid number
checkout.addItem({ name: "Invalid Item", price: "abc" });   // Invalid price

console.log(checkout.getTotal()); // ✅ Total: $103.45
