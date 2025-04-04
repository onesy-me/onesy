import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGite = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Gite'

      short_name='Gite'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200q-33 0-56.5-23.5T80-280v-247q0-16 6-30.5t17-25.5l114-114q11-11 25.5-17t30.5-6h7v-40q0-17 11.5-28.5T320-800q17 0 28.5 11.5T360-760v40h327q16 0 30.5 6t25.5 17l114 114q11 11 17 25.5t6 30.5v247q0 33-23.5 56.5T800-200H160Zm480-80h160v-247l-80-80-80 80v247Zm-80 0v-200H160v200h400Z"/>
    </Icon>
  );
});

IconMaterialGite.displayName = 'OnesyIconMaterialGite';

export default IconMaterialGite;
