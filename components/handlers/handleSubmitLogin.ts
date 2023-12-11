import { FieldErrors, SubmitHandler } from 'react-hook-form';
import { Inputs } from "../types/Inputs";

const handleSubmit = ({errors}: {errors: FieldErrors<Inputs>}) => {

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    "use server";
    if (errors) console.log(errors);
  };
}

export handleSubmit;