/* eslint-disable react/no-unescaped-entities */
import { css } from '@emotion/react';
import type { CSSMotionProps, MotionEventHandler } from 'rc-motion';
import { useState } from 'react';

import Button from '@/@components/@shared/Button/Button';
import Loading from '@/@components/@shared/Loading';
import PageTemplate from '@/@components/@shared/PageTemplate';
import Title from '@/@components/@shared/Title';
import CollapseItem from '@/@components/collapse/CollpaseItem';

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
  const [activeKey, setActiveKey] = useState<React.Key | React.Key[]>(['0', '1', '2']);

  return (
    <PageTemplate>
      <Styled.Root>
        {/* <Loading isColor={false} /> */}
        <Styled.NoticeContainer>
          <Title content='공지사항' />
          <Styled.CustomCollapse openMotion={collapseMotion} onChange={setActiveKey} activeKey={activeKey}>
            {CollapseItem.slice(0, 3)}
          </Styled.CustomCollapse>
        </Styled.NoticeContainer>

        <Styled.RegisterButtonContainer>
          <Button
            css={css`
              margin-bottom: 30px;
            `}
          >
            수강신청 바로가기
          </Button>
        </Styled.RegisterButtonContainer>

        <Styled.ContactContainer>
          <Styled.CustomCollapse openMotion={collapseMotion} defaultActiveKey='0'>
            {CollapseItem[3]}
          </Styled.CustomCollapse>
        </Styled.ContactContainer>
      </Styled.Root>
    </PageTemplate>
  );
};

export default MainPage;
