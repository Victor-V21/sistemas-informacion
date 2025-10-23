import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  substract = "-",
  multiply = "x",
  divide = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [preNumber, setPreNumber] = useState("0");

  // es para que cada vez cambie de valor no se renderize toda la pantalla
  //  useref
  const lastOperation = useRef<Operator>(undefined);

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }

    // TODO: calcular subresultado
  }, [number]);

  const clean = () => {
    setNumber("0");
    setPreNumber("0");
    setFormula("0");
    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("+", ""));
    }

    return setNumber(number.replace("-", ""));
  };

  const deleteLast = () => {
    let currentSign = "";
    let temporalNumber = number;

    // Manejar el signo negativo
    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.substring(1);
    }

    // Eliminar el ultimo caracter
    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber("0");
  };

  const setLastNumber = () => {
    //TODO : calcular resultado

    // si el numero termina en 772.
    if (number.endsWith(".")) {
      setPreNumber(number.slice(0, -1));
    }

    // AQUI NOS QUEDAMOS EN LA CLASE DEL 22-OCTUBRES
    setPreNumber(number);
    setNumber("0");
  };

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
    clean,
    toggleSign,
    deleteLast,
  };
};
