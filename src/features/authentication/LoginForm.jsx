import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";

import { useState } from "react";

export default function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return <Form onSubmit={handleSubmit}></Form>;
}
