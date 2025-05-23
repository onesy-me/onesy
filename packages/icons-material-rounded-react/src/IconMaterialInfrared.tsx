import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInfrared = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Infrared'

      short_name='Infrared'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-480q0 105-36 197.5T665-116q-11 13-28 14.5T608-112q-12-12-11-29.5t12-31.5q52-63 81.5-141T720-480q0-88-29.5-166T609-787q-11-14-12-31.5t11-29.5q12-12 29-10.5t28 14.5q63 74 99 166.5T800-480Zm-160 0q0 72-23 135.5T552-229q-11 14-28 15t-29-11q-12-12-12-29t11-31q32-41 49-90.5T560-480q0-55-17-104.5T494-675q-11-14-11-31t12-29q12-12 29-11t28 15q42 52 65 115.5T640-480Zm-160 0q0 39-11.5 74.5T436-341q-10 14-26.5 14T381-339q-11-11-12-28t8-31q11-18 17-38.5t6-43.5q0-23-6-43.5T377-562q-9-14-8-31t12-28q12-12 28.5-12t26.5 14q21 29 32.5 64.5T480-480Zm-160 0q0 33-23.5 56.5T240-400v200q0 17-11.5 28.5T200-160q-17 0-28.5-11.5T160-200v-560q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v200q33 0 56.5 23.5T320-480Z"/>
    </Icon>
  );
});

IconMaterialInfrared.displayName = 'OnesyIconMaterialInfrared';

export default IconMaterialInfrared;
