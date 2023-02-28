import { Link } from 'react-router-dom';

import Icon from '@/@components/@shared/Icon';
import logoImage from '@/assets/images/logo.png';
import User from '@/assets/images/user.png';
import { PATH } from '@/Router';

import * as Styled from './Header.styles';

const Header = () => {
  return (
    <Styled.Root>
      <Styled.Logo>
        <Link to={PATH.MAIN}>
          <img src={logoImage} alt='부산대 로고' width={135} height={35} />
        </Link>
      </Styled.Logo>
      <Styled.Profile>
        <Styled.Logo>
          <img src={User} alt='유저 이미지' width={25} height={25} />
        </Styled.Logo>
        <Icon iconName='menu' size='30' />
      </Styled.Profile>
    </Styled.Root>
  );
};

export default Header;
