import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinDropW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDropW100Filled'

      short_name='PinDrop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-244q-7.57 0-14.76-2.5-7.19-2.5-13.24-7.5-75-60-150.5-148T226-594q0-64.22 23-112.61T308.33-788q36.33-33 81.75-49.5Q435.49-854 480-854q44.51 0 89.92 16.5 45.42 16.5 81.75 49.5T711-706.61q23 48.39 23 112.61 0 104-75.5 192T508-254q-6.05 5-13.24 7.5T480-244Zm0-302q23 0 38.5-15.5T534-600q0-23-15.5-38.5T480-654q-23 0-38.5 15.5T426-600q0 23 15.5 38.5T480-546ZM240-106q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h480q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H240Z"/>
    </Icon>
  );
});

IconMaterialPinDropW100Filled.displayName = 'OnesyIconMaterialPinDropW100Filled';

export default IconMaterialPinDropW100Filled;
