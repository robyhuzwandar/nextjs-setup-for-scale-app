import styled from 'styled-components';

interface TitleProps extends TitleStyledProps {
  children: any;
}

interface TitleStyledProps {
  color?: string;
  fontSize?: string;
}

const Underline = styled.div`
  height: 8px;
  width: 300px;
  background-color: 'red';
`;

const Container = styled.div``;

const TitleStyled = styled.div<TitleStyledProps>`
  font-size: ${({ fontSize }) => fontSize || '24px'};
  font-weight: 700;
  color: ${({ color }) => color};
`;

export const Title = ({ children, color, fontSize }: TitleProps) => {
  return (
    <Container>
      <TitleStyled color={color} fontSize={fontSize}>
        {children}
      </TitleStyled>
      <Underline />
    </Container>
  );
};
