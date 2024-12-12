import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinEndFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinEndFilled'

      short_name='PinEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v320h-80v-240H160v480h400v80H80Zm478-225L440-503v89h-80v-226h226v80h-90l118 118-56 57Zm202 225q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialPinEndFilled.displayName = 'OnesyIconMaterialPinEndFilled';

export default IconMaterialPinEndFilled;
