import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudsBatteryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsBatteryW100Filled'

      short_name='EarbudsBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M750-662v-13q0-6 4.5-10.5T765-690q5.2 0 9.1 3.9 3.9 3.9 3.9 9.1v15h48q11.9 0 19.95 8.05Q854-645.9 854-634v340q0 11.9-8.05 19.95Q837.9-266 826-266H702q-11.9 0-19.95-8.05Q674-282.1 674-294v-340q0-11.9 8.05-19.95Q690.1-662 702-662h48ZM225.17-266q-50.17 0-84.67-34.38T106-385v-241q0-27 18.5-45.5T170-690q27 0 45.5 18.5T234-626q0 27-18.5 45.5T170-562q-9.33 0-18.67-3-9.33-3-17.33-9v189q0 38 26.5 64.5T225-294q38 0 64.5-26.5T316-385v-185.65q0-50.39 34.33-84.87Q384.66-690 434.83-690t84.67 34q34.5 34 34.5 85v241q0 27-18.5 45.5T490-266q-27 0-45.5-18.5T426-330q0-27 18.5-45.5T490-394q9.33 0 18.67 3 9.33 3 17.33 9v-189q0-38-26.5-64.5T435-662q-38 0-64.5 26.5T344-571v185.65q0 50.39-34.33 84.87Q275.34-266 225.17-266Z"/>
    </Icon>
  );
});

IconMaterialEarbudsBatteryW100Filled.displayName = 'OnesyIconMaterialEarbudsBatteryW100Filled';

export default IconMaterialEarbudsBatteryW100Filled;
