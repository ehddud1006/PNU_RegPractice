import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Input from '@/@components/@shared/Input';

const Fieldset = styled.fieldset`
  border: none;
`;

const Wrapper = styled.div`
  padding: 0.5rem;
`;

const RadioButtonGroup = ({ label, options, onChange }: any) => {
  function renderOptions() {
    return options.map(({ label, name }: any, index: any) => {
      return (
        <Input.Radio
          value={label}
          label={label}
          key={label}
          id={label}
          name={name}
          defaultChecked={index === 0}
          onChange={onChange}
        />
      );
    });
  }

  return (
    <Fieldset>
      <Wrapper>{renderOptions()}</Wrapper>
    </Fieldset>
  );
};

export default RadioButtonGroup;
