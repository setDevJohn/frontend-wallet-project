import styled from 'styled-components';

export const CardListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
  margin-bottom: 30px;
  padding: 10px 15px;
  width: 100%;
`;

export const Card = styled.li<{$details: boolean; $color: string}>`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ $color }) => $color};;
  border-radius: 10px;
  box-shadow: 2px 2px 7px -2px #0004;
  transition: all 0.4s ease;
  padding: 12px;
  overflow: hidden;
  height: ${({ $details }) => $details ? '157px': '58px' };
  width: 100%;
  cursor: pointer;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  width: 100%;
`;

export const IconCardContainer = styled.div<{$details: boolean;}>`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transition: all 0.5s ease;
  transform: ${({ $details }) => (
    `translate(-50%, 60%) ${$details ? 'rotate(-180deg)' : ''}`
  )};
`;

export const TextCard = styled.p<{$column?: boolean; $name?: boolean}>`
  display: flex;
  font-size: ${({ $name, theme }) => $name ? theme.normalText : theme.smallText};
  flex-direction: ${({ $column }) => $column && 'column'};
  gap: 2px;
  color: ${({ theme }) => theme.textColor};
`;

export const TextCardSpan = styled.span`
  font-size: ${({ theme }) => theme.smallSpan};
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;

export const InvoiceValue = styled.p`
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.smallText};
`;

export const InvoiceSpan = styled.span`
  font-size: ${({ theme }) => theme.smallSpan};
`;

export const RecentExtract = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 10px 20px 23px 20px;
`;