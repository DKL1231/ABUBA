import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../styles/styledComponents';

interface Props {
  onNext: () => void;
};

const ChildInfoForm = ({ onNext }: Props) => {
  const [childName, setChildName] = useState('');
  const [relation, setRelation] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!childName || !relation || !height || !weight || !birthDate || !gender) {
      setError('모든 필드를 입력해주세요.');
      return;
    }
    console.log({ childName, relation, height, weight, birthDate, gender });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <Label>아이 이름</Label>
        <Input
          type="text"
          value={childName}
          onChange={(e) => setChildName(e.target.value)}
        />

        <Label>아이와의 관계</Label>
        <RelationContainer>
          <RelationButton
            type="button"
            isSelected={relation === '엄마'}
            onClick={() => setRelation('엄마')}
          >
            엄마
          </RelationButton>
          <RelationButton
            type="button"
            isSelected={relation === '아빠'}
            onClick={() => setRelation('아빠')}
          >
            아빠
          </RelationButton>
        </RelationContainer>

        <Label>키 (cm)</Label>
        <Input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <Label>몸무게 (kg)</Label>
        <Input
          type="number"
          step="0.1"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <Label>생년월일</Label>
        <Input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <Label>성별</Label>
        <GenderContainer>
          <GenderButton
            type="button"
            isSelected={gender === '남자'}
            onClick={() => setGender('남자')}
          >
            남자
          </GenderButton>
          <GenderButton
            type="button"
            isSelected={gender === '여자'}
            onClick={() => setGender('여자')}
          >
            여자
          </GenderButton>
        </GenderContainer>
      </InputContainer>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button type="submit" onClick={onNext} >다음</Button>
    </FormContainer>
  );
};

export default ChildInfoForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;
  border-radius: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const RelationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const RelationButton = styled.button<{ isSelected: boolean }>`
  width: 45%;
  padding: 15px;
  background-color: ${({ isSelected }) => (isSelected ? '#3B6EBA' : '#f0f0f0')};
  border: 1px solid #ccc;
  border-radius: 8px;
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  cursor: pointer;

`;

const GenderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const GenderButton = styled.button<{ isSelected: boolean }>`
  width: 45%;
  padding: 15px;
  background-color: ${({ isSelected }) => (isSelected ? '#3B6EBA' : '#f0f0f0')};
  border: 1px solid #ccc;
  border-radius: 8px;
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  cursor: pointer;
`;


const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 15px;
`;