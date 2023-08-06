import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

import Timer from '@/@page/Main/unit/Timer';

const HeaderDesk = () => {
  return (
    <S.Root>
      <S.Container>
        <S.Item>
          <img src='https://sugang.pusan.ac.kr/common/images/logo.png' alt='부산대 로고' />
        </S.Item>
        <S.Item>
          <NavLink to='/register'>수강신청</NavLink>
          <NavLink to='/main'>공지사항</NavLink>
          <Link to='/main'>학생기본정보</Link>
          <Link to='/main'>게시판</Link>
        </S.Item>

        <Timer />
      </S.Container>
    </S.Root>
  );
};

export default HeaderDesk;

const S = {
  Root: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;
    width: 100%;

    z-index: 190;

    background-color: #043d92;
    border-bottom: none;

    height: 50px;

    @media (max-width: 1000px) {
      display: none;
    }
  `,

  Container: styled.div`
    justify-content: flex-start;
    max-width: 100% !important;
    height: 100%;
    position: relative;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    gap: 80px;
  `,

  Item: styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 10px;

    & > img {
      height: 36px;
    }

    & > a {
      color: #fff;
      font-size: 18px;

      padding-left: 25px;
      padding-right: 25px;
    }

    & > a.active {
      color: #abf6a1;
      text-decoration: underline 3px;
      text-underline-offset: 3px;
    }
  `,
};
