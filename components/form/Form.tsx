import React, { ReactNode, FormEvent } from "react";

interface FormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit} className="flex flex-col" action="/formulaire">
    {children}
  </form>
);

export default Form;
