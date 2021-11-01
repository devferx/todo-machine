import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({show, toggleShow}) {
  if (show) {
    return <p>Hubo Cambios</p>
  }

  return null;
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };