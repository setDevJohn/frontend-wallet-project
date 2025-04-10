import styled from 'styled-components';

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
  margin-bottom: 30px;
  padding: 10px 15px;
  width: 100%;
`;

export const Card = styled.li<{$details: boolean; $color: string}>`
  display: flex;
  flex-direction: column;
  background-color: ${({ $color }) => $color};;
  border-radius: 10px;
  transition: all 0.4s ease;
  padding: 12px;
  overflow: hidden;
  height: ${({ $details }) => $details ? '157px': '60px' };
  width: 100%;
`;

export const CardHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  width: 100%;
`;

export const IconCardContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 60%);
`;

export const TextCard = styled.p<{$column?: boolean; $name?: boolean}>`
  display: flex;
  font-size: ${({ $name }) => $name ? '18px' : '15px'};
  flex-direction: ${({ $column }) => $column && 'column'};
  gap: 2px;
  color: #fff;
`;

export const TextCardSpan = styled.span`
  font-size: 11px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;

export const ExtractDate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #888;
`;

export const ExtractItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 4px;
  margin-bottom: 2px;
`;

export const ExtractDesc = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ExtractList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const ExtractItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InvoiceValue = styled.p`
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: #fff;
  font-size: 20px;
`;

export const InvoiceSpan = styled.span`
  font-size: 12px;
`;

export const Title = styled.h2`
  margin: 20px 20px 0 20px;
  font-size: 22px;
  font-weight: 400;
`;

export const RecentExtract = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 10px 20px 23px 20px;
`;