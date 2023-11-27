import React from "react";

interface FormInputProps {
  id: string;
  label: string;
  formType: string;
  placeHolder?: string;
  value?: string;
  onChange: (e: any) => void;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  return (
    <div className="flex flex-col w-full text-white gap-2">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        placeholder={props.placeHolder}
        onChange={props.onChange}
        defaultValue={props.value}
        className="min-h-[3.2rem] py-2 px-3 w-full rounded-lg bg-zinc-900 border-[0.1rem] border-zinc-700"
        type={props.formType}
        id={props.id}
      />
    </div>
  );
};

export default React.memo(FormInput);
