import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 72px 1px 72px;
  grid-template-rows: 40pxpx;
  gap: 8px;
`;

export const SubContainer = styled(Container)`
  grid-template-columns: repeat(2, 32px);
  margin: 4px 0;
`;

export const Divider = styled.div`
border-left: 1px solid black;
width: 1px;
height: 100%;
`;

export const Button = styled.button`
width: 32px;
padding: 4px;
margin: 0;
background: ${({ active }) => active ? '#f1f1f1' : 'transparent' };
border-width: 1px;
cursor: pointer;

&:hover {
  background: #f1f1f1;
}
`;
