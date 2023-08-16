export const handleSumaTotal = (item) => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = item.reduce(reducer, 0);
    return sum;
  };