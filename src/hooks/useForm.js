import { useState, useEffect, useMemo } from "react";

export const useForm = (initialForm = {}, formValidators = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
    return true;
  }, [formValidation]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {};
    //iteramos el arrglo de validators
    for (const formField of Object.keys(formValidators)) {
      //des-estructuramos la fn y el error de cada property
      const [fn, errorMessage] = formValidators[formField];
      //creamos la propiedad en el arreglo segun el resultado de la fn
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    setFormValidation(formCheckedValues);
    // console.log(formCheckedValues);
  };

  return {
    //validation
    ...formValidation,
    isFormValid,
    //state
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
