import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinInvoke = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinInvoke'

      short_name='PinInvoke'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h360q17 0 28.5 11.5T560-760q0 17-11.5 28.5T520-720H160v480h640v-200q0-17 11.5-28.5T840-480q17 0 28.5 11.5T880-440v200q0 33-23.5 56.5T800-160H160Zm360-263-90 90q-12 12-28 11.5T374-334q-11-12-11.5-28t11.5-28l90-90h-50q-17 0-28.5-11.5T374-520q0-17 11.5-28.5T414-560h146q17 0 28.5 11.5T600-520v146q0 17-11.5 28.5T560-334q-17 0-28.5-11.5T520-374v-49Zm240-137q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialPinInvoke.displayName = 'OnesyIconMaterialPinInvoke';

export default IconMaterialPinInvoke;
