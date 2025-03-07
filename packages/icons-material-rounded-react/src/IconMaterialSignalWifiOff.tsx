import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalWifiOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiOff'

      short_name='SignalWifiOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M745-385q-12 12-28 11.5T689-386q-12-12-12-28.5t12-28.5l155-155q-79-60-172-91t-192-31q-29 0-58 3t-58 8q-17 3-30-6t-16-26q-3-16 6-29.5t26-16.5q32-6 64.5-9.5T480-800q125 0 239.5 43.5T928-628q7 5 10 13t3 16q0 8-2.5 15.5T930-570L745-385ZM480-234l67-66-350-350q-21 11-41 24.5T116-598l364 364ZM791-57 604-244l-96 96q-6 6-13 9t-15 3q-8 0-15-3t-13-9L30-570q-6-6-9-13.5T18-599q0-8 3-16t10-14q26-23 53-43t55-36l-84-84q-12-12-11.5-28T56-848q12-12 28.5-12t28.5 12l735 735q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM512-562Zm-140 87Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiOff.displayName = 'OnesyIconMaterialSignalWifiOff';

export default IconMaterialSignalWifiOff;
