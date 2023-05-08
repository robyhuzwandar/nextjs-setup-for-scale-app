import { theme } from '@/src/shared/theme';
import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  min-height: 60px;
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  border: 0px;
  cursor: pointer;

  @media (max-width: ${theme.screen.mobile}) {
    font-size: 14px;
  }
`;
