import * as yup from "yup";

const userInformationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  preferredContactMethod: yup
    .string()
    .required("Please select a preferred contact method"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must only contain digits")
    .min(11, "Phone number must be at least 11 digits")
    .required("Phone number is required"),
});

export default userInformationSchema;
