import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorStatusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorStatusW100Filled'

      short_name='DetectorStatus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-209 159-160q4-5 9.5-5t10.5 5q5 5 5 10t-5 10L459-191q-9 9-21 9t-21-9l-74-74q-4-4-4.5-10t4.5-10q4-4 10-3.5t10 4.5l75 75ZM294-652l22 59q4 10 12 15.5t18 5.5h268q10 0 18-5.5t12-15.5l22-59H294Zm52 108q-19 0-34.5-10.5T289-583l-25-69h-32q-25 0-42.5-17.5T172-712v-46q0-13 8.5-21.5T202-788h556q13 0 21.5 8.5T788-758v46q0 25-17.5 42.5T728-652h-32l-27 69q-7 17-22 28t-34 11H346Z"/>
    </Icon>
  );
});

IconMaterialDetectorStatusW100Filled.displayName = 'OnesyIconMaterialDetectorStatusW100Filled';

export default IconMaterialDetectorStatusW100Filled;
