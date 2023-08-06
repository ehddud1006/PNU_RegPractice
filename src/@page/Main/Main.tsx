/* eslint-disable react/no-unescaped-entities */
import { css } from '@emotion/react';
import type { CSSMotionProps, MotionEventHandler } from 'rc-motion';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/@components/@shared/Button/Button';
import { DateTimeContext } from '@/@components/@shared/DateTimeProvider';
import Header from '@/@components/@shared/Header';
import Loading from '@/@components/@shared/Loading';
import PageTemplate from '@/@components/@shared/PageTemplate';
import Title from '@/@components/@shared/Title';
import useViewport from '@/@hooks/@common/useViewPort';
import CollapseItem from '@/@page/Main/unit/collapse/CollpaseItem';
import HeaderDesk from '@/@page/Main/unit/HeaderDesk';
import Side from '@/@page/Main/unit/Side';

import * as Styled from './Main.styles';

const getCollapsedHeight: MotionEventHandler = () => ({
  height: 0,
  opacity: 1,
});
const getRealHeight: MotionEventHandler = (node: HTMLElement) => ({
  height: node.scrollHeight,
  opacity: 1,
});
const getCurrentHeight: MotionEventHandler = (node: HTMLElement) => ({
  height: node?.offsetHeight,
});

const collapseMotion: CSSMotionProps = {
  motionName: 'rc-collapse-motion',
  onEnterStart: getCollapsedHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  motionDeadline: 500,
};

const MainPage = () => {
  const navigate = useNavigate();

  const { viewPort } = useViewport();

  const [loading, setLoading] = useState(false);

  const [activeKey, setActiveKey] = useState<React.Key | React.Key[]>(['0', '1', '2']);
  const { currentDateTime } = useContext(DateTimeContext);
  const { isFirst, setIsFirst } = useContext(DateTimeContext);

  function checkTime() {
    const deadline = new Date('2023-08-08T10:00:00'); // Set to your desired timezone, this example is in UTC

    if (currentDateTime < deadline) {
      return false;
    }

    return true;
  }

  return (
    <>
      <HeaderDesk />
      {(viewPort === 'tablet' || viewPort === 'mobile') && <Header />}
      <Styled.HeaderSection />

      <Styled.Root>
        {/* <Loading isColor={false} /> */}
        <Side />

        <Styled.AsideSection />

        <Styled.Wrapper>
          <Styled.NoticeContainer>
            {/* <Title content='공지사항' /> */}
            <Styled.CustomCollapse openMotion={collapseMotion} onChange={setActiveKey} activeKey={activeKey}>
              {CollapseItem.slice(0, 3)}
            </Styled.CustomCollapse>
          </Styled.NoticeContainer>

          <Styled.RegisterButtonContainer>
            <Button
              css={css`
                margin-bottom: 30px;
              `}
              onClick={() => {
                const isNavigate = checkTime();

                console.log(isFirst);

                if (isNavigate) {
                  if (!isFirst) {
                    navigate('/register');
                  } else {
                    setLoading(true);
                    setIsFirst(false);
                    setTimeout(() => {
                      navigate('/register');
                    }, 7000);
                  }
                } else alert('수강신청기간이 아닙니다!');
              }}
            >
              수강신청 바로가기
            </Button>
          </Styled.RegisterButtonContainer>

          <Styled.ContactContainer>
            <Styled.CustomCollapse openMotion={collapseMotion} defaultActiveKey='0'>
              {CollapseItem[3]}
            </Styled.CustomCollapse>
          </Styled.ContactContainer>
        </Styled.Wrapper>

        {loading && <Loading />}
      </Styled.Root>
    </>
  );
};

export default MainPage;
