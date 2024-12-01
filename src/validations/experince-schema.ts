import * as yup from "yup";

const experienceSchema = yup.object().shape({
  experienceItems: yup.array().of(
    yup.object().shape({
      id: yup.string(),
      experience: yup.string().required("Experience is required"),
      duration: yup
        .number()
        .required("Duration is required")
        .positive("Duration must be a positive number"),
    })
  ),
  id: yup.string(),
  experience: yup.string().required("Experience is required"),
  duration: yup
    .number()
    .required("Duration is required")
    .min(1, "Duration must be at least 1 month"), // Ensure duration is at least 1 month
});

export default experienceSchema;
