import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinEnd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinEnd'

      short_name='PinEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v200q0 17-11.5 28.5T840-480q-17 0-28.5-11.5T800-520v-200H160v480h360q17 0 28.5 11.5T560-200q0 17-11.5 28.5T520-160H160Zm336-400 90 90q11 11 11 27.5T586-414q-12 12-28.5 12T529-414l-89-89v49q0 17-11.5 28.5T400-414q-17 0-28.5-11.5T360-454v-146q0-17 11.5-28.5T400-640h146q17 0 28.5 11.5T586-600q0 17-11.5 28.5T546-560h-50Zm264 400q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialPinEnd.displayName = 'OnesyIconMaterialPinEnd';

export default IconMaterialPinEnd;
