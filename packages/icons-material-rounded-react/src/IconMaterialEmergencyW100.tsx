import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyW100'

      short_name='Emergency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M436-190v-213L251-296q-16 9-33.5 4T191-313.31q-9-15.69-4.51-33.29 4.48-17.6 20.51-26.4l185-107-185-106q-16.03-8.68-20.51-26.34Q182-630 191-646q9-16 27-21t34 4l184 107v-214q0-18.23 12.84-31.11 12.84-12.89 31-12.89T511-801.11q13 12.88 13 31.11v214l185-107q16-9 33.5-4t26.5 21q9 16 4.31 33.66Q768.63-594.68 753-586L568-480l185 107q16.03 8.8 20.51 26.4Q778-329 769-312.69 760-297 742-292q-18 5-34-4L524-403v213q0 18.23-12.84 31.11-12.84 12.89-31 12.89T449-158.89q-13-12.88-13-31.11Z"/>
    </Icon>
  );
});

IconMaterialEmergencyW100.displayName = 'OnesyIconMaterialEmergencyW100';

export default IconMaterialEmergencyW100;
