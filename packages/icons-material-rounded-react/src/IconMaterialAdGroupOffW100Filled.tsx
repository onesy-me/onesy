import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdGroupOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdGroupOffW100Filled'

      short_name='AdGroupOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-292q-24.75 0-42.37-17.63Q266-327.25 266-352v-302L114-806q-4-4-4.5-9.5T114-826q5-5 10-5t10 5l692 692q4 4 4.5 9.5T826-114q-5 5-10 5t-10-5L628-292H326ZM218-184q-24.75 0-42.37-17.63Q158-219.25 158-244v-430q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v430q0 14 9 23t23 9h430q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H218Zm555-116L379-694q-7-7-3.46-16.5T389-720h385v-48q0-14-9-23t-23-9l-412 1q-10.95 0-13.98-11.04-3.02-11.03 6.98-16 2-.96 3.31-1.46 1.32-.5 3.69-.5h412q24.75 0 42.38 17.62Q802-792.75 802-768v416q0 16-7.5 30T773-300Z"/>
    </Icon>
  );
});

IconMaterialAdGroupOffW100Filled.displayName = 'OnesyIconMaterialAdGroupOffW100Filled';

export default IconMaterialAdGroupOffW100Filled;
