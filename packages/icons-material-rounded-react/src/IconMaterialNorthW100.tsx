import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNorthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthW100'

      short_name='North'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-6 0-10-4t-4-10v-631L262-573q-4 4-9 3.5t-9-4.5q-4-4-4-9.5t4-9.5l215-215q5-5 10-7t11-2q6 0 11 2t10 7l216 216q4 4 4 9.5t-4 9.5q-4 5-10 4.5t-10-4.5L494-776v630q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialNorthW100.displayName = 'OnesyIconMaterialNorthW100';

export default IconMaterialNorthW100;
