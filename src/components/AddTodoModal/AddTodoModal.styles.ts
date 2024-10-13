import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CancelButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 6px;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  padding: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SaveButton = styled.button`
  background-color: #6dbe45;
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;
