export const formattedPrice = (price: number): string => {
  if (price >= 1_000_000) {
    return (
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 1,
      }).format(price / 1_000_000) + "M"
    );
  }

  if (price >= 1_000) {
    return (
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(price / 1_000) + "K"
    );
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
};

export const getTypeColor = (type: string) => {
  switch (type) {
    case "rent":
      return "bg-primary text-white";
    case "sale":
      return "bg-blue-100 text-secondary";
    default:
      return "bg-primary text-white";
  }
};


