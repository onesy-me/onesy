import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedication = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Medication'

      short_name='Medication'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-360v40q0 25 17.5 42.5T480-260q25 0 42.5-17.5T540-320v-40h40q25 0 42.5-17.5T640-420q0-25-17.5-42.5T580-480h-40v-40q0-25-17.5-42.5T480-580q-25 0-42.5 17.5T420-520v40h-40q-25 0-42.5 17.5T320-420q0 25 17.5 42.5T380-360h40ZM280-120q-33 0-56.5-23.5T200-200v-440q0-33 23.5-56.5T280-720h400q33 0 56.5 23.5T760-640v440q0 33-23.5 56.5T680-120H280Zm0-80h400v-440H280v440Zm0-560q-17 0-28.5-11.5T240-800q0-17 11.5-28.5T280-840h400q17 0 28.5 11.5T720-800q0 17-11.5 28.5T680-760H280Zm0 120v440-440Z"/>
    </Icon>
  );
});

IconMaterialMedication.displayName = 'OnesyIconMaterialMedication';

export default IconMaterialMedication;
