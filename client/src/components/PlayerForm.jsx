import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const PlayerForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    preferredPosition: "",
    status: "Undecided",
  };

  const ErrorPlayer = Yup.object().shape({
    name: Yup.string().min(2, "Too short!").required("Name is required"),
  });

  const submit = async (values, actions) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_API_URL}`,
        values
      );
      if (response.status == 200) {
        console.log("success");
        toast.success(`${response.data.name} created successfully!`);
        navigate("/players/list");
      }
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(`${err?.response.data.message}`);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={submit}
        validationSchema={ErrorPlayer}
      >
        {({ isValid, dirty, errors, touched }) => (
          <Form>
            <div className="input-group align-items-center justify-content-between mb-2">
              <label className="input-group-text" htmlFor="name">
                Player Name:
              </label>
              <Field className="form-control" name="name"></Field>
              {touched.name && errors.name && (
                <p className="text-danger form-text ms-1">{errors.name}</p>
              )}
            </div>
            <div className="input-group align-items-center justify-content-between mb-2">
              <label className="input-group-text" htmlFor="name">
                Preferred Position:
              </label>
              <Field className="form-control" name="preferredPosition"></Field>
            </div>
            <button
              type="submit"
              disabled={!(isValid && dirty)}
              className="btn btn-success mb-2 px-5 border-dark border-2 fw-bold"
            >
              ADD
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PlayerForm;
