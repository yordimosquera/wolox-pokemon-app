import React, { useContext, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { GiPadlock } from 'react-icons/gi';
import { AiOutlineMail } from 'react-icons/ai';
import { AiTwotonePhone } from 'react-icons/ai';
import { FaFlag } from 'react-icons/fa';

import ErrorText from '../../components/ErrorText';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import AutoComplete from '../../components/AutoComplete';
import CheckBox from '../../components/CheckBox';
import MainLogo from '../../components/MainLogo';
import { SIGN_UP_FIELDS_ERRORS } from '../../constants';
import woloxLogo from '../../assets/images/logo_full_color.svg';

import './styles.scss';

const SignUp = ({ history, getCountries, countries, userSignUp }) => {
  const { handleSubmit, errors, control, watch } = useForm();

  useEffect(() => {
    getCountries();
  }, []);

  const buttonDisabled = Object.keys(errors).length > 0;
  const onSubmit = data => {
    userSignUp(data, countries);
    history.push('/pokemonlist');
  };

  console.log(errors);
  return (
    <div className="signup">
      <MainLogo route={'/'} logo={woloxLogo} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={'name'}
          control={control}
          defaultValue={''}
          rules={{
            required: SIGN_UP_FIELDS_ERRORS.name.required,
            maxLength: {
              value: 30,
              message: SIGN_UP_FIELDS_ERRORS.name.maxLength
            }
          }}
          render={props => (
            <InputText placeHolder={'first name'} {...props}>
              <BiUser />
            </InputText>
          )}
        />
        {errors.name && <ErrorText message={errors.name.message} />}

        <Controller
          name={'last_name'}
          control={control}
          defaultValue={''}
          rules={{
            required: SIGN_UP_FIELDS_ERRORS.last_name.required,
            maxLength: {
              value: 30,
              message: SIGN_UP_FIELDS_ERRORS.last_name.maxLength
            }
          }}
          render={props => (
            <InputText placeHolder={'last name'} {...props}>
              <BiUser />
            </InputText>
          )}
        />
        {errors.last_name && <ErrorText message={errors.last_name.message} />}

        <Controller
          name={'mail'}
          control={control}
          defaultValue={''}
          rules={{
            required: SIGN_UP_FIELDS_ERRORS.mail.required,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: SIGN_UP_FIELDS_ERRORS.mail.pattern
            }
          }}
          render={props => (
            <InputText name={'email'} placeHolder={'email'} {...props}>
              <AiOutlineMail />
            </InputText>
          )}
        />
        {errors.mail && <ErrorText message={errors.mail.message} />}

        <Controller
          name={'phone'}
          control={control}
          defaultValue={''}
          rules={{
            required: SIGN_UP_FIELDS_ERRORS.phone.required,
            minLength: {
              value: 10,
              message: SIGN_UP_FIELDS_ERRORS.phone.minLength
            },
            maxLength: {
              value: 10,
              message: SIGN_UP_FIELDS_ERRORS.phone.maxLength
            }
          }}
          render={props => (
            <InputText placeHolder={'phone'} type="number" {...props}>
              <AiTwotonePhone />
            </InputText>
          )}
        />
        {errors.phone && <ErrorText message={errors.phone.message} />}

        <Controller
          name={'password'}
          control={control}
          defaultValue={''}
          rules={{
            required: SIGN_UP_FIELDS_ERRORS.password.required,
            minLength: {
              value: 6,
              message: SIGN_UP_FIELDS_ERRORS.password.minLength
            }
          }}
          render={props => (
            <InputText placeHolder={'password'} type={'password'} {...props}>
              <GiPadlock />
            </InputText>
          )}
        />
        {errors.password && <ErrorText message={errors.password.message} />}

        <Controller
          name={'password_repeat'}
          control={control}
          defaultValue={''}
          rules={{
            required: SIGN_UP_FIELDS_ERRORS.password_repeat.required,
            validate: value =>
              value === watch('password') ||
              SIGN_UP_FIELDS_ERRORS.password_repeat.validate
          }}
          render={props => (
            <InputText
              placeHolder={'repeat the password'}
              type={'password'}
              {...props}
            >
              <GiPadlock />
            </InputText>
          )}
        />
        {errors.password_repeat && (
          <ErrorText message={errors.password_repeat.message} />
        )}

        <Controller
          name="country"
          control={control}
          options={countries}
          rules={{ required: SIGN_UP_FIELDS_ERRORS.country.required }}
          as={
            <AutoComplete placeHolder={'country'}>
              <FaFlag />
            </AutoComplete>
          }
        />
        {errors.country && <ErrorText message={errors.country.message} />}

        <Controller
          name={'accept'}
          control={control}
          rules={{ required: SIGN_UP_FIELDS_ERRORS.accept.required }}
          render={props => (
            <CheckBox
              checked={props.value}
              onChange={e => props.onChange(e.target.checked)}
            >
              <p>{'Aceptas los terminos y condiciones'}</p>
              <Link to={'/terms'} target="_blank">
                {'Terms and conditions'}
              </Link>
            </CheckBox>
          )}
        />
        {errors.accept && <ErrorText message={errors.accept.message} />}

        <Button
          buttonStyle={buttonDisabled ? 'btn--disabled' : 'btn--primary'}
          type="submit"
          disabled={buttonDisabled}
        >
          {'Registrarse'}
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
