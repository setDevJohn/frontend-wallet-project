import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100svh;
  width: 100%;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.linearGradient};
  font-size: ${({ theme }) => theme.subtitle};
  padding: 10px 20px;
  border-radius: 0 0 10px 10px;
  box-shadow: 1px 2px 10px #0004;
  height: 60px;
  width: 100%;
`;

export const Overflow = styled.div`
  flex: 1;
  width: 100%;
  padding: 20px;
  overflow: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;