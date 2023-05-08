import { theme } from '@/src/shared/theme';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import { Text } from './Text';

type StepProps = {
  currentStep: number;
};

const steps = [
  {
    step: 1,
    label: 'Delivery',
  },
  {
    step: 2,
    label: 'Payment',
  },
  {
    step: 3,
    label: 'Finish',
  },
];

export const Step = ({ currentStep = 1 }: StepProps) => (
  <>
    {steps.map((item, index) => (
      <Stepper
        key={item.step}
        step={item.step}
        label={item.label}
        isActive={currentStep === index + 1}
      />
    ))}
  </>
);

const StepperContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 21px;
  color: ${theme.colors.primary};
`;

const StepperStyled = styled.div<{ isActive: boolean }>`
  padding: 6px 10px 2px;
  background-color: ${({ isActive }) =>
    isActive ? theme.colors.primary : 'rgba(255, 138, 0, 0.2)'};
  border-radius: 15px;
  margin-right: 10px;
  color: ${({ isActive }) => (isActive ? 'white' : theme.colors.primary)};
  mix-blend-mode: normal;
`;

const ArrowIcon = styled(ArrowForwardIosIcon)`
  height: 10px;
  width: 10px;
  margin-left: 22px;
`;

const Stepper = ({
  step,
  label,
  isActive,
}: {
  label: string;
  isActive: boolean;
  step: number;
}) => {
  return (
    <StepperContainer>
      <StepperStyled isActive={isActive}>{step}</StepperStyled>
      <Text>{label}</Text>
      <ArrowIcon />
    </StepperContainer>
  );
};
