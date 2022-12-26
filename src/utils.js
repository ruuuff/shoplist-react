export function randomId(length) {
  const string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";

  while (id.length !== length) {
    id += string[Math.floor(Math.random() * string.length)];
  }

  return id;
}

export function formatCurrency(value, currency = "BRL", locale = "pt-br") {
  return value.toLocaleString(locale, {
    style: "currency",
    currency,
  });
}

export function updateLocalStorageItem(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getLocalStorageItem(name) {
  return JSON.parse(localStorage.getItem(name));
}
