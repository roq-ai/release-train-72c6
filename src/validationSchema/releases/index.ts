import * as yup from 'yup';

export const releaseValidationSchema = yup.object().shape({
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
  manager_id: yup.string().nullable(),
});
