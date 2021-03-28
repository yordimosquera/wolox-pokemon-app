export const ELEMENTS_PER_PAGE_OPTIONS = [
  { value: 5, selected: false },
  { value: 10, selected: false },
  { value: 20, selected: true },
  { value: 50, selected: false },
  { value: 100, selected: false }
];

export const SIGN_UP_FIELDS_ERRORS = {
  accept: { required: 'You should accept the terms and conditions' },
  country: { required: 'The Country is required' },
  last_name: {
    required: 'The Last name is required',
    maxLength: 'The name must be less than 30 characters '
  },
  name: {
    required: 'The Name is required',
    maxLength: 'The name must be less than 30 characters '
  },
  mail: {
    required: 'The Email is required',
    pattern: 'Use an email with a valid format'
  },
  phone: {
    required: 'The phone is required',
    maxLength: 'The phone number should have 10 digits',
    minLength: 'The phone number should have 10 digits'
  },
  password: {
    required: 'The password is required',
    minLength: 'The password must have more than 6 digits'
  },
  password_repeat: {
    required: 'Please confirm the password',
    validate: 'The passwords do not match'
  }
};
