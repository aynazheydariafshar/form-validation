import * as yup from "yup";

const experienceSchema = yup.object().shape({
  experienceItems: yup.array().of(
    yup.object().shape({
      id: yup.string(),
      experience: yup.string().required("Experience is required"),
      duration: yup
        .number()
        .required("Duration is required")
        .typeError("Duration is required")
        .positive("Duration must be a positive number"),
    })
  ),
  id: yup.string(),
  experience: yup.string().required("Experience is required"),
  duration: yup
    .number()
    .required("Duration is required")
    .typeError("Duration is required")
    .min(1, "Duration must be at least 1 month"),
});

export type ExperinceType = yup.InferType<typeof experienceSchema>;

export default experienceSchema;
