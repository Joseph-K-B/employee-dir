import { useState } from "react";

// Set empty object as parameter
// utilize custom hook for multiple forms
function useForm(inputs = {}) {
  const [formState, setFormState] = useState(inputs);
  const [formError, setFormError] = useState('');

  const handleFormChange = (e) => {
    //target html element name property
    const { name, value } = e.target;
    //set state using rest params to allow for multiple arguments
    setFormState((prev) => {
      return { ...prev, [name]: value}
    });
  };


  return { formState, formError, setFormError, handleFormChange};
}

export default useForm;