import { payment } from '@/src/shared/mock/payment';
import { shipment } from '@/src/shared/mock/shipment';
import * as React from 'react';
import { CheckboxData } from '../components/SelectedListItem';
import { getStorage, setStorage } from '../shared/utils/local-storage';

const usePayment = () => {
  const [selectedPayment, setSelectedPayment] = React.useState<CheckboxData>();
  const [selectedShipment, setSelectedShipment] =
    React.useState<CheckboxData>();

  const getDataShipment = () =>
    shipment.map((item) => {
      return { label: item.name, value: item.fee };
    });

  const getDataPayment = () => {
    return payment.map((item) => {
      return { label: item.name, value: item.balance };
    });
  };

  const onSelectPayment = (item: CheckboxData) => {
    setSelectedPayment(item);
    setStorage('selectedPayment', item);
  };

  const onSelectShipment = (item: CheckboxData) => {
    setSelectedShipment(item);
    setStorage('selectedShipment', item);
  };

  React.useEffect(() => {
    const selectedPaymentLocalStorage =
      getStorage<CheckboxData>('selectedPayment');
    const selectedShipmentLocalStorage =
      getStorage<CheckboxData>('selectedShipment');

    setSelectedPayment(selectedPaymentLocalStorage ?? getDataPayment()[0]);
    setSelectedShipment(selectedShipmentLocalStorage ?? getDataShipment()[0]);
  }, []);

  return {
    shipment: getDataShipment(),
    payment: getDataPayment(),
    onSelectPayment,
    onSelectShipment,
    selectedPayment,
    selectedShipment,
  };
};

export default usePayment;
