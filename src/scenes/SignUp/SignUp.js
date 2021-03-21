import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { BiUser } from 'react-icons/bi';
import { GiPadlock } from 'react-icons/gi';
import { AiOutlineMail } from 'react-icons/ai';
import { AiTwotonePhone } from 'react-icons/ai';

import ErrorText from '../../components/ErrorText';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import AutoComplete from '../../components/AutoComplete';
import CheckBox from '../../components/CheckBox';
import CountriesContext from '../../store/Countries/context';
import './styles.scss';

const SignUp = () => {
  const countriesContext = useContext(CountriesContext);
  const { handleSubmit, errors, control } = useForm();

  const onSubmit = data => console.log(data);

  const { getCountries, countries } = countriesContext;

  useEffect(() => {
    getCountries('col');
  }, []);

  const buttonDisabled = Object.keys(errors).length > 0;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name={'firstName'}
        control={control}
        defaultValue={''}
        rules={{ required: true, maxLength: 30 }}
        errorMessage={errors?.value?.message}
        render={props => (
          <InputText placeHolder={'first name'} {...props}>
            <BiUser />
          </InputText>
        )}
      />
      {errors.firstName && <ErrorText message={'First name is required'} />}

      <Controller
        name={'lastName'}
        control={control}
        defaultValue={''}
        rules={{ required: true, maxLength: 30 }}
        errorMessage={errors?.value?.message}
        render={props => (
          <InputText placeHolder={'last name'} {...props}>
            <BiUser />
          </InputText>
        )}
      />
      {errors.lastName && <ErrorText message={'Last name is required'} />}

      <Controller
        name={'email'}
        control={control}
        defaultValue={''}
        rules={{ required: true, pattern: /\S+@\S+\.\S+/ }}
        errorMessage={errors?.value?.message}
        render={props => (
          <InputText name={'email'} placeHolder={'email'} {...props}>
            <AiOutlineMail />
          </InputText>
        )}
      />
      {errors.email && <ErrorText message={'Email is required'} />}

      <Controller
        name={'phone'}
        control={control}
        defaultValue={''}
        rules={{ required: true, minLength: 10, maxLength: 10 }}
        errorMessage={errors?.value?.message}
        render={props => (
          <InputText placeHolder={'phone'} type="number" {...props}>
            <AiTwotonePhone />
          </InputText>
        )}
      />
      {errors.phone && <ErrorText message={'Phone is required'} />}

      <Controller
        name={'password'}
        control={control}
        defaultValue={''}
        rules={{ required: true, minLength: 6 }}
        errorMessage={errors?.value?.message}
        render={props => (
          <InputText placeHolder={'password'} type={'password'} {...props}>
            <GiPadlock />
          </InputText>
        )}
      />
      {errors.password && <ErrorText message={'Password is required'} />}

      <Controller
        name="country"
        control={control}
        options={countries}
        rules={{ required: true }}
        as={AutoComplete}
      />
      {errors.country && <ErrorText message={'Country is required'} />}

      <Controller
        name={'accept'}
        control={control}
        rules={{ required: true }}
        errorMessage={errors?.value?.message}
        render={props => (
          <CheckBox
            checked={props.value}
            onChange={e => props.onChange(e.target.checked)}
          >
            {'Aceptas los terminos y condiciones'}
          </CheckBox>
        )}
      />
      {errors.accept && (
        <ErrorText message={'You should accept the terms and conditions'} />
      )}

      <Button
        buttonStyle={buttonDisabled ? 'btn--disabled' : 'btn--primary'}
        type="submit"
        disabled={buttonDisabled}
      >
        {'Registrarse'}
      </Button>
    </form>
  );
};

export default SignUp;
