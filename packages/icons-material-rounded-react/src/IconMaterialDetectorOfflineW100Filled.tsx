import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorOfflineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorOfflineW100Filled'

      short_name='DetectorOffline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-276-95 95q-4 4-9 3.5t-9-4.5q-4-4-4-9.5t4-9.5l94-94-95-95q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l94 95 95-95q4-4 9.5-4t9.5 4q4 4 4 9.5t-4 9.5l-95 95 95 95q4 4 4 9t-4 9q-4 4-9.5 4t-9.5-4l-95-94ZM294-652l22 59q4 10 12 15.5t18 5.5h268q10 0 18-5.5t12-15.5l22-59H294Zm52 108q-19 0-34.5-10.5T289-583l-25-69h-32q-25 0-42.5-17.5T172-712v-46q0-13 8.5-21.5T202-788h556q13 0 21.5 8.5T788-758v46q0 25-17.5 42.5T728-652h-32l-27 69q-7 17-22 28t-34 11H346Z"/>
    </Icon>
  );
});

IconMaterialDetectorOfflineW100Filled.displayName = 'OnesyIconMaterialDetectorOfflineW100Filled';

export default IconMaterialDetectorOfflineW100Filled;
