import { PropsWithChildren } from 'react';

import Header from '@/@components/@shared/Header';

import * as Styled from './PageTemplate.styles';

const PageTemplate = (props: PropsWithChildren) => {
  return (
    <Styled.Root>
      <Header />
      {props.children}
    </Styled.Root>
  );
};

export default PageTemplate;
