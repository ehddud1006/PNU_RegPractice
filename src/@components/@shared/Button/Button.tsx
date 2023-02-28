import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Button = styled.button`
  min-height: 38px;

  padding: 8px 20px 7px;

  border-radius: 4px;

  ${({ theme }) => css`
    background-color: ${theme.colors.blue_3};

    color: ${theme.colors.white_1};
    font-size: 15px;
  `}
`;

export default Button;
