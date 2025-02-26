import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadphonesBatteryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesBatteryW100'

      short_name='HeadphonesBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M208-266h-96v-216q0-86.67 60.74-147.33Q233.47-690 320.24-690q86.76 0 147.26 60.67Q528-568.67 528-482v216h-96v-168h68v-48q0-75-52.5-127.5T320-662q-75 0-127.5 52.5T140-482v48h68v168Zm462 0v-396h76v-28h28v28h76v396H670Zm28-28h124-124Zm0 0h124v-340H698v340Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesBatteryW100.displayName = 'OnesyIconMaterialHeadphonesBatteryW100';

export default IconMaterialHeadphonesBatteryW100;
