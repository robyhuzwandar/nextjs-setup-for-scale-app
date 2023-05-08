import { theme } from '@/src/shared/theme';
import styled from 'styled-components';
import { Text } from '../Text';

const Divider = styled.div`
  border-top: 2px solid grey;
  max-width: 80px;
  margin-bottom: 21px;
  margin-top: 19px;
`;

type SummaryTextSectionProps = {
  label: string;
  description: string;
};

export const SummaryTextSection = ({
  label,
  description,
}: SummaryTextSectionProps) => (
  <>
    <Divider />
    <Text fontSize="14px">{label}</Text>
    <Text fontSize="16px" color={theme.colors.success}>
      {description}
    </Text>
  </>
);
