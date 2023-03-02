import { useEffect, useState } from 'react';

import Button from '@/@components/@shared/Button/Button';
import Input from '@/@components/@shared/Input';
import RadioButtonGroup from '@/@components/@shared/RadioGroup/RadioGroup';

import * as Styled from './Login.styles';

const LoginForm = () => {
  const drinks = [
    {
      label: 'Coffee',
      name: 'button-types',
    },
    {
      label: 'Tea',
      name: 'button-types',
    },
  ];

  const [selectedValue, setSelectedValue] = useState(drinks[0].label);

  function radioGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
  }

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  return (
    <Styled.Root>
      <Styled.InputContainer>
        <Input css={Styled.CustomInput} label='ID' placeholder='학번' />
        <Input css={Styled.CustomInput} label='Password' placeholder='비밀번호' />
        <RadioButtonGroup label='Select your drink:' options={drinks} onChange={radioGroupHandler} />
      </Styled.InputContainer>
      <Styled.BunttonContainer>
        <Button css={Styled.CustomButton}>로그인</Button>
      </Styled.BunttonContainer>
    </Styled.Root>
  );
};

export default LoginForm;
