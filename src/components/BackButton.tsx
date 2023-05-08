import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { Text } from './Text';

const ButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const ArrowBackStyled = styled(ArrowBackIcon)`
  height: 18px;
  width: 18px;
  margin-right: 10px;
`;

type BackButtonProps = {
  label: string;
  onClick?: () => void;
};

const BackButton = ({ label, onClick }: BackButtonProps) => {
  const router = useRouter();

  const onClickBack = () => {
    if (onClick) {
      onClick();
    } else {
      router.back();
    }
  };

  return (
    <ButtonStyled onClick={onClickBack}>
      <ArrowBackStyled />
      <Text>{label}</Text>
    </ButtonStyled>
  );
};

export default BackButton;
