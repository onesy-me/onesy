import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadphonesBatteryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesBatteryW100Filled'

      short_name='HeadphonesBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M178-266h-6q-24.75 0-42.37-17.63Q112-301.25 112-326v-156q0-86.67 60.74-147.33Q233.47-690 320.24-690q86.76 0 147.26 60.67Q528-568.67 528-482v156q0 24.75-17.62 42.37Q492.75-266 468-266h-6q-12.75 0-21.37-8.63Q432-283.25 432-296v-108q0-12.75 8.63-21.38Q449.25-434 462-434h38v-48q0-75-52.5-127.5T320-662q-75 0-127.5 52.5T140-482v48h38q12.75 0 21.38 8.62Q208-416.75 208-404v108q0 12.75-8.62 21.37Q190.75-266 178-266Zm568-396v-13q0-6 4.5-10.5T761-690q5.2 0 9.1 3.9 3.9 3.9 3.9 9.1v15h48q11.9 0 19.95 8.05Q850-645.9 850-634v340q0 11.9-8.05 19.95Q833.9-266 822-266H698q-11.9 0-19.95-8.05Q670-282.1 670-294v-340q0-11.9 8.05-19.95Q686.1-662 698-662h48Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesBatteryW100Filled.displayName = 'OnesyIconMaterialHeadphonesBatteryW100Filled';

export default IconMaterialHeadphonesBatteryW100Filled;
