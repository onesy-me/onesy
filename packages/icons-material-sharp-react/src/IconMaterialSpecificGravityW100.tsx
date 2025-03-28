import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpecificGravityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpecificGravityW100'

      short_name='SpecificGravity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m255-132-77-696h604l-77 696H255Zm-25-482h155q18-19 42.5-29.5T480-654q28 0 52.5 10.5T575-614h155l20-186H209l21 186Zm250 200q44 0 75-31t31-75q0-44-31-75t-75-31q-44 0-75 31t-31 75q0 44 31 75t75 31ZM233-586l47 426h400l47-426H597q8 14 12.5 31t4.5 35q0 56-39 95t-95 39q-56 0-95-39t-39-95q0-18 4.5-35t12.5-31H233Zm47 426h83-17 268-17 83-400Z"/>
    </Icon>
  );
});

IconMaterialSpecificGravityW100.displayName = 'OnesyIconMaterialSpecificGravityW100';

export default IconMaterialSpecificGravityW100;
