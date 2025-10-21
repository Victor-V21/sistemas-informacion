import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  substract = "-",
  multiply = "x",
  divide = "÷",
  init = "",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [preNumber, setPreNumber] = useState("0");

  const lastOperation = useRef<Operator>(Operator.init);

  useEffect(() => {
    // TODO: calcular subresultado
    setFormula(number);
  }, [number]);

  const buildNumber = (numberString: string) => {
    // verificar si ya existe el punto decimal

    if (number.includes(".") && numberString === ".") {
      return;
    }
    if (number.startsWith("0") || number.startsWith("-0")) {
      //
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      // Evaluar si es otro cero y no hay punto
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      // Evaluar si es diferente de 0, no hay punto decimal y es el primer numero
      if (numberString != "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      // Evitar una cantidad alta de ceros 00000
      if (numberString === "0" && !number.includes(".")) {
        return;
      }
    }

    setNumber(number + numberString);
  };

  return {
    // Properties
    formula,
    number,
    preNumber,

    // Methods
    buildNumber,
  };
};
