import * as React from 'react';
import { DeliveryDetails } from '../shared/models/DeliveryDetails.type';
import { getStorage, setStorage } from '../shared/utils/local-storage';

const defaultState: DeliveryDetails = {
  deliveryAddress: '',
  email: '',
  isSendAsDropshipper: false,
  name: '',
  dropshipperName: '',
  dropshipperPhoneNumber: '',
};

const useDeliveryDetails = () => {
  const [deliveryDetails, setDeliveryDetails] =
    React.useState<DeliveryDetails>(defaultState);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedForm: DeliveryDetails = {
      ...deliveryDetails,
      [e.target.name]: e.target.value,
    };
    saveData(updatedForm);
  };

  const onChangeSendAsDropshipper = (value: boolean) => {
    const updatedState = { ...deliveryDetails, isSendAsDropshipper: value };
    saveData(updatedState);
  };

  const saveData = (data: DeliveryDetails) => {
    const cloneData = structuredClone(data);
    setDeliveryDetails(cloneData);
    setStorage('delivery-details', cloneData);
  };

  React.useEffect(() => {
    const deliveryDetailsLocalStorage =
      getStorage<DeliveryDetails>('delivery-details');
    if (deliveryDetailsLocalStorage) {
      setDeliveryDetails(deliveryDetailsLocalStorage);
    }
  }, []);

  return {
    onChangeInput,
    onChangeSendAsDropshipper,
    deliveryDetails,
  };
};

export default useDeliveryDetails;
