import styled from "styled-components";

export const AddButton = styled.button`
  background-color: #6dbe45;
  border-radius: 8px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px;
  width: 100%;
`;

export const Container = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 0 auto;
  padding: 20px;
  width: 400px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 500px;
  list-style-type: none;
  overflow-y: auto;
  padding: 0;
`;

export const Task = styled.li`
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const TaskTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  width: fit-content;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
`;
