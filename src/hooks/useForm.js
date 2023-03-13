import { useState, useEffect } from "react";

export const useForm = (initialForm = {}, formValidators = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

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
  };

  return {
    //validation
    ...formValidation,
    formValidation,
    //state
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
