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
      let farenheit = 9 * (tempValue / 5) + 32;
      let kelvin = tempValue + 273;

      return {
        celsius: tempValue,
        farenheit,
        kelvin,
      };
    }
    if (scale === "f") {
      let celsius = (5 * (tempValue - 32)) / 9;
      let kelvin = (5 * (tempValue - 32)) / 9 + 273;

      return {
        celsius,
        farenheit: tempValue,
        kelvin,
      };
    }
    if (scale === "k") {
      let celsius = tempValue - 273;
      let farenheit = (9 * (tempValue - 273)) / 5 + 32;

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
