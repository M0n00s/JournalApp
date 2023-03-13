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
    for (const formField of Object.keys(formValidators)) {
      console.log(formField);
    }
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
