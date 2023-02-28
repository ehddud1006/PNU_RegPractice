import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.header`
  width: 100%;
  height: 59px;

  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 15px;

  ${({ theme }) => css`
    z-index: ${theme.layers.header};

    background-color: ${theme.colors.grey_1};

    color: ${theme.colors.grey_1};
  `}
`;

export const Logo = styled.div``;

export const Profile = styled.div`
  display: flex;

  gap: 15px;

  & > :nth-of-type(2) {
    padding-top: 5px;
  }
`;

export const User = styled.div``;
