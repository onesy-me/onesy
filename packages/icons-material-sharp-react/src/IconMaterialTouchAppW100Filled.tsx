import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTouchAppW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchAppW100Filled'

      short_name='TouchApp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M748-132H380L158-430l23-26 155 74v-312h28v202h384v360ZM222-606q-10-17-15-35.63-5-18.64-5-38.37 0-62 43-105t105-43q62 0 105 43t43 104.87q0 20.13-5 38.63-5 18.5-15 35.5l-24-14q8-14 12-28.5t4-31.5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 17 4 31.5t12 28.5l-24 14Z"/>
    </Icon>
  );
});

IconMaterialTouchAppW100Filled.displayName = 'OnesyIconMaterialTouchAppW100Filled';

export default IconMaterialTouchAppW100Filled;
