import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useContext } from 'react';

import { RegisterDataProviderContext } from '@/@components/@shared/RegisterDataProvider';

const Message = () => {
  const { isSuccess } = useContext(RegisterDataProviderContext);

  if (!isSuccess?.init) return null;

  return (
    <>
      {(() => {
        switch (isSuccess?.value) {
          case '추가':
            return <S.Root>교과목 신청이 완료되었습니다.</S.Root>;
          case '마감':
            return <S.BlueRoot>인원이 가득찬 교과목입니다.</S.BlueRoot>;
          case '삭제':
            return <S.RedRoot>교과목이 신청이 취소되었습니다.</S.RedRoot>;
          default:
            return <div>Unknown status.</div>;
        }
      })()}
    </>
  );
};

export default Message;

const S = {
  Root: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 15px;
    width: calc(100vw - 270px);
    height: 60px;
    background-color: rgba(40, 167, 69, 0.2);
    border-radius: 5px;

    @media (max-width: 1000px) {
      width: calc(100vw - 30px);
    }
  `,

  RedRoot: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 15px;
    width: calc(100vw - 270px);
    height: 60px;
    background-color: rgba(220, 53, 69, 0.2);
    border-radius: 5px;

    width: calc(100vw - 30px);
  `,

  BlueRoot: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 15px;
    width: calc(100vw - 270px);
    height: 60px;
    background-color: rgba(0, 0, 255, 0.2);
    border-radius: 5px;

    width: calc(100vw - 30px);
  `,
};
