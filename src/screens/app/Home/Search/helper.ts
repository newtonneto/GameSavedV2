import { SubmitHandler, useForm } from 'react-hook-form';

type Form = {
  search: string;
};

const useHelper = () => {
  const { control, handleSubmit } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = data => {
    console.log(data);
  };

  return { control, handleSubmit, onSubmit };
};

export default useHelper;
