import styled from "styled-components";

interface AmountModalProps {
  deposit: number;
  setDeposit: (value: number) => void;
  memo: string;
  setMemo: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const AmountModal: React.FC<AmountModalProps> = ({ deposit, setDeposit, memo, setMemo, onNext, onBack }) => {
  return (
    <div>
      <Title>금액 입력</Title>
      <Input
        type="number"
        value={deposit}
        onChange={(e) => setDeposit(Number(e.target.value))}
        placeholder="송금할 금액"
      />
      <Title>메모 입력</Title>
      <Input
        type="text"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder="메모를 입력하세요."
      />
      <ButtonContainer>
        <BackButton onClick={onBack}>이전</BackButton>
        <NextButton onClick={onNext}>다음</NextButton>
      </ButtonContainer>
    </div>
  )
}

export default AmountModal

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NextButton = styled.button`
  padding: 10px 20px;
  background-color: #3B6EBA;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #173C91;
  }
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;