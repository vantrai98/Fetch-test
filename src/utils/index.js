export const formatCoinNumber = (amount) => {
  const formatter = Intl.NumberFormat("en-IN");
  return formatter.format(amount);
};
