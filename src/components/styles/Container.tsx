import { theme } from '@/src/shared/theme';
import styled from 'styled-components';

interface ContainerProps {
  margin?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  backgroundColor?: string;
  width?: number;
  height?: number;
}

export const Container = styled.div<ContainerProps>`
  margin: ${(p) => p.margin};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || theme.colors.white};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
`;
