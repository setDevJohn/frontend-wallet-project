import styled from 'styled-components';

export const SearchInput = styled.input`
  display: block;
  background-color: ${({ theme }) => theme.color2};
  color: #fff;
  font-size: 16px;
  outline: none;
  border-radius: 5px;    
  box-shadow: 1px 2px 7px -2px #0004;
  border: none;
  margin: 0 auto;
  padding:7px 10px;
  width: 93%;
`;