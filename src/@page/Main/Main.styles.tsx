import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Collapse from 'rc-collapse';

export const Root = styled.div``;

export const NoticeContainer = styled.section`
  padding: 8px 15px 30px 15px;
`;

export const CustomCollapse = styled(Collapse)`
  border-left: 1px solid rgba(0, 0, 0, 0.125);
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.white_1};
  `}
`;

export const RegisterButtonContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactContainer = styled.section`
  padding: 8px 15px 30px 15px;
`;
