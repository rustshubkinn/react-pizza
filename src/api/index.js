const pizzaURL =
  'https://react-pizza-b3bcc-default-rtdb.europe-west1.firebasedatabase.app/pizza';

const availableOptionsURL =
  'https://react-pizza-b3bcc-default-rtdb.europe-west1.firebasedatabase.app/availableOptions';

export const fetchPizza = async () => {
  const response = await fetch(`${pizzaURL}.json`);
  const result = await response.json();
  if (!result) {
    return [];
  }

  const arrayOfPizza = Object.keys(result).map((key) => result[key]);
  return arrayOfPizza;
};

export const fetchOptions = async () => {
  const response = await fetch(`${availableOptionsURL}.json`);
  const result = await response.json();
  if (!result) {
    return [];
  }

  return result;
};
