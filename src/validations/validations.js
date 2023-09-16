export const validData = (value) => {
  const length = value.length
  return (length >= 5 )
};

export const isValidURL = (url) => {
  const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/[a-zA-Z0-9.-]*)*(\?.*)?$/;
  return urlPattern.test(url);
};

export const validDescription = (value) => {
  const palabras = value.split(/\s+/);
  const cantidadPalabras = palabras.length;
  return (cantidadPalabras >= 20)
};

export const isSelectValid = (value) => {
  return (value !== "") 
};

export const isValidColorFormat = (color) => {
  const colorRegex = /^#[0-9A-Fa-f]{6}$/;
  return colorRegex.test(color);
};

export const validCode = (value) => {
  if (value.length < 6) {
    return false
  }
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
  return regex.test(value);
};