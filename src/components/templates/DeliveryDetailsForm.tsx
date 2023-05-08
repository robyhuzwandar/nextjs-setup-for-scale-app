import { DeliveryDetails } from '@/src/shared/models/DeliveryDetails.type';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    deliveryAddress: yup.string().required(),
    dropshipperName: yup.string().required(),
    dropshipperPhoneNumber: yup.string().required(),
  })
  .required();

const InputStyled = styled.input`
  margin-bottom: 10px;
  height: 60px;
`;

interface DeliveryDetailsFormProps extends DeliveryDetails {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DeliveryDetailsForm = ({
  onChange,
  deliveryAddress,
  email,
  isSendAsDropshipper,
  name,
  dropshipperName,
  dropshipperPhoneNumber,
}: DeliveryDetailsFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.info(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      <div
        style={{
          display: 'flex',
          flex: 2,
          flexDirection: 'column',
          marginRight: '20px',
        }}
      >
        <InputStyled
          placeholder="Name"
          value={name}
          {...register('name', {
            onChange,
          })}
          aria-invalid={errors.mail ? 'true' : 'false'}
        />
        {errors.mail && <p role="alert">{`${errors.mail?.message}`}</p>}
        <InputStyled
          value={email}
          placeholder="Email"
          {...register('email', {
            onChange,
          })}
        />
        <textarea
          rows={7}
          cols={33}
          placeholder="Delivery Address"
          value={deliveryAddress}
          {...register('deliveryAddress', {
            onChange,
          })}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1.5 }}>
        <InputStyled
          disabled={!isSendAsDropshipper}
          placeholder="Dropshipper name"
          value={dropshipperName}
          {...register('dropshipperName', {
            onChange,
          })}
        />
        <InputStyled
          disabled={!isSendAsDropshipper}
          placeholder="Dropshipper phone number"
          value={dropshipperPhoneNumber}
          {...register('dropshipperPhoneNumber', {
            onChange,
          })}
        />
      </div>
    </form>
  );
};
