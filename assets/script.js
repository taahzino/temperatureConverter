function celsiusToKelvin(celsius) {
  return celsius + 273;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function farenheitToCelsius(farenheit) {
  return ((farenheit - 32) * 5) / 9;
}

function farenheitToKelvin(farenheit) {
  return ((farenheit - 32) * 5) / 9 + 273;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273;
}

function kelvinToFahrenheit(kelvin) {
  return (9 * (kelvin - 273)) / 5 + 32;
}

function temperatureConverter(temp) {
  try {
    if (typeof temp !== "string") {
      throw new Error("Input type must be a string!");
    }

    let scale = temp.charAt(temp.length - 1).toLowerCase();
    let tempValue = temp.slice(0, temp.length - 1);

    if (temp.trim().length === 0) {
      throw new Error("Input must not be empty!");
    }

    tempValue = Number(tempValue);

    if (tempValue.toString() === "NaN") {
      throw new Error("Temperature value must be a number!");
    }

    if (scale !== "c" && scale !== "f" && scale !== "k") {
      return "Scale is not valid!";
    }

    if (scale === "c") {
      let farenheit = celsiusToFahrenheit(tempValue);
      let kelvin = celsiusToKelvin(tempValue);

      return {
        celsius: tempValue,
        farenheit,
        kelvin,
      };
    }
    if (scale === "f") {
      let celsius = farenheitToCelsius(tempValue);
      let kelvin = farenheitToKelvin(tempValue);

      return {
        celsius,
        farenheit: tempValue,
        kelvin,
      };
    }
    if (scale === "k") {
      let celsius = kelvinToCelsius(tempValue);
      let farenheit = kelvinToFahrenheit(tempValue);

      return {
        celsius,
        farenheit,
        kelvin: tempValue,
      };
    }
  } catch (error) {
    return error.message;
  }
}
