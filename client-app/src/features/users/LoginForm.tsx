import { Form, Formik } from "formik";
import React from "react";
import MyTextInput from "../../app/common/form/MyTextInput";
import { Button } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";

function LoginForm() {
  const { userStore } = useStore();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => userStore.login(values)}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
          <MyTextInput placeholder="email" name="email" />
          <MyTextInput placeholder="password" name="password" type="password" />
          <Button
            loading={isSubmitting}
            positive
            content="login"
            type="submit"
            fluid
          />
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
