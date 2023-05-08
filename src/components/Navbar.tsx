import { theme } from '@/src/shared/theme';
import styled from 'styled-components';
import { Step } from './Step';

const NavbarStyled = styled.div`
  background-color: ${theme.colors.secondary};
  position: absolute;
  width: 500px;
  height: 70px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type NavbarProps = {
  currentStep: number;
};

const Navbar = ({ currentStep }: NavbarProps) => {
  return (
    <NavbarStyled>
      <Step currentStep={currentStep} />
    </NavbarStyled>
  );
};

export default Navbar;
