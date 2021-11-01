import React from 'react';

import { useStorageListener } from './useStorageListener';

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div>
        <p>Hubo Cambios</p>
        <button
          onClick={() => toggleShow(false)}
        >
          Volver a cargar la información
        </button>
      </div>
    )
  }

  return null;
}

export { ChangeAlert };