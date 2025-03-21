import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsInputAntennaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputAntennaW100'

      short_name='SettingsInputAntenna'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-480q-7 0-10.5-5.5T92-499q4-77 35.5-144T211-760q52-50 121-79t148-29q79 0 148 28.5T749-761q52 50 83.5 117T868-499q0 8-3.5 13.5T854-480q-7 0-10.5-5.5T840-498q-7-145-111-243.5T480-840q-145 0-249 98.5T120-498q0 7-3.5 12.5T106-480Zm160 0q-6 0-10.5-4.5T252-495q6-91 71.5-152T480-708q91 0 156.5 61T708-495q1 6-3.5 10.5T694-480q-6 0-10-4.5t-5-11.5q-6-77-63-130.5T480-680q-78 0-135.5 53.5T281-496q-1 7-5 11.5t-10 4.5Zm214 260L370-110q-4 4-9.5 4.5T350-110q-5-5-5-10t5-10l116-116v-159q-27-7-44-27t-17-47q0-32 21.5-53.5T480-554q32 0 53.5 21.5T555-479q0 27-17 47t-44 27v159l116 116q4 4 4.5 9.5T610-110q-5 5-10 5t-10-5L480-220Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputAntennaW100.displayName = 'OnesyIconMaterialSettingsInputAntennaW100';

export default IconMaterialSettingsInputAntennaW100;
