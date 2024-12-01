import * as yup from "yup";

const userInformationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  address: yup.string(),
  email: yup.string().when("preferredContactMethod", {
    is: "email",
    then: () =>
      yup
        .string()
        .email("Please enter a valid email address")
        .required("Email is required"),
  }),
  phoneNumber: yup.string().when("preferredContactMethod", {
    is: "phoneNumber",
    then: () =>
      yup
        .string()
        .matches(/^[0-9]+$/, "Phone number must only contain digits")
        .min(11, "Phone number must be at least 11 digits"),
  }),
  preferredContactMethod: yup
    .string()
    .required("Please select a preferred contact method"),
});

export type UserInformationType = yup.InferType<typeof userInformationSchema>;

export default userInformationSchema;
