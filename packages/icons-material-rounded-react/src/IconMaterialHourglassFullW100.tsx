import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHourglassFullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassFullW100'

      short_name='HourglassFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.9 20.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.8v-3q0-1.8 1.038-3.213Q9.775 12.375 11.5 12q-1.725-.375-2.762-1.788Q7.7 8.8 7.7 7V4H5.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.8v3q0 1.8-1.037 3.212Q14.225 11.625 12.5 12q1.725.375 2.763 1.787Q16.3 15.2 16.3 17v3h1.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialHourglassFullW100.displayName = 'OnesyIconMaterialHourglassFullW100';

export default IconMaterialHourglassFullW100;
