import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

import styled from '@emotion/styled';

import { WritingFormText } from './WritingForm.Text';

interface FormField {
  nickname: string;
  content: string;
}

export const WritingForm = () => {
  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>();

  useEffect(() => {
    setFocus('nickname');
  }, [setFocus]);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <WritingFormWrap>
      <WritingFormText />

      <CustomForm onSubmit={onSubmit}>
        <CustomTextField
          id="nickname"
          label="닉네임"
          variant="standard"
          error={errors.nickname !== undefined}
          helperText={errors.nickname && errors.nickname?.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          defaultValue="익명"
          {...register('nickname', {
            required: '닉네임을 입력해 주세요.',
            minLength: {
              value: 2,
              message: '2자 이상의 닉네임을 입력해주세요.',
            },
            maxLength: {
              value: 20,
              message: '20자 이하의 닉네임을 입력해주세요.',
            },
          })}
        />
        <CustomTextField
          id="content"
          label="글"
          variant="standard"
          color="secondary"
          error={errors.content !== undefined}
          helperText={errors.content && errors.content?.message}
          multiline
          rows={10}
          {...register('content', {
            required: '글을 입력해 주세요.',
            minLength: { value: 1, message: '글을 입력해 주세요.' },
            validate: (value) =>
              value.length <= 1000
                ? true
                : `1000자 이하의 글을 입력해주세요. (현재 ${value.length}자)`,
          })}
        />

        <SubmitButton
          variant="outlined"
          color="primary"
          type="submit"
          disabled={isSubmitting}
        >
          전송
        </SubmitButton>
      </CustomForm>
    </WritingFormWrap>
  );
};

const WritingFormWrap = styled.div`
  margin: 18px 12px;
`;

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;

  margin: 0 3px;
  margin-top: 15px;

  gap: 6px;
`;

const CustomTextField = styled(TextField)`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  position: absolute;

  bottom: 30px;
  right: 15px;
`;
