export const currencies = [
  {
    code: "USD",
    name: "Dólar Estadounidense (USA/Ecuador/El Salvador)",
    locale: "en-US",
  },
  { code: "ARS", name: "Peso Argentino", locale: "es-AR" },
  { code: "BOB", name: "Boliviano (Bolivia)", locale: "es-BO" },
  { code: "BRL", name: "Real Brasileño", locale: "pt-BR" },
  { code: "CAD", name: "Dólar Canadiense", locale: "en-CA" },
  { code: "CLP", name: "Peso Chileno", locale: "es-CL" },
  { code: "COP", name: "Peso Colombiano", locale: "es-CO" },
  { code: "CRC", name: "Colón Costarricense", locale: "es-CR" },
  { code: "CUP", name: "Peso Cubano", locale: "es-CU" },
  { code: "DOP", name: "Peso Dominicano", locale: "es-DO" },
  { code: "GTQ", name: "Quetzal (Guatemala)", locale: "es-GT" },
  { code: "HNL", name: "Lempira (Honduras)", locale: "es-HN" },
  { code: "MXN", name: "Peso Mexicano", locale: "es-MX" },
  { code: "NIO", name: "Córdoba (Nicaragua)", locale: "es-NI" },
  { code: "PAB", name: "Balboa (Panamá)", locale: "es-PA" },
  { code: "PYG", name: "Guaraní (Paraguay)", locale: "es-PY" },
  { code: "PEN", name: "Sol (Perú)", locale: "es-PE" },
  { code: "UYU", name: "Peso Uruguayo", locale: "es-UY" },
  { code: "VES", name: "Bolívar (Venezuela)", locale: "es-VE" },
];

export const formatMoney = (amount, currencyConfig) => {
  if (!currencyConfig) return amount;

  return new Intl.NumberFormat(currencyConfig.locale, {
    style: "currency",
    currency: currencyConfig.code,
    minimumFractionDigits: 0,
  }).format(amount);
};
