import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLandslideW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideW100Filled'

      short_name='Landslide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-192v-68l108 35 372-123 91 120q23 30 6.5 63T655-132H192q-25 0-42.5-17.5T132-192Zm108-63-108-35v-120l108 35 187-62 156 68-343 114Zm493-196 68-31q12-5 19.5-16t7.5-25v-19q0-16-9.5-28T793-586l-59-13q-10-2-20 0t-18 9l-27 21q-8 7-12.5 16t-4.5 20v26q0 11 4.5 20t12.5 16l17 14q10 8 23 9.5t24-3.5Zm-493 46-108-35v-88q0-25 17.5-42.5T192-588h73q14 0 26.5 6t20.5 17l85 109-157 51Zm268-262 92-37q13-5 20.5-16t7.5-25v-55q0-16-10-28.5T592-844l-83-17q-9-2-17.5-.5T475-855l-43 30q-9 6-14.5 16t-5.5 21v56q0 11 5.5 21t14.5 16l34 24q9 6 20 7.5t22-3.5Z"/>
    </Icon>
  );
});

IconMaterialLandslideW100Filled.displayName = 'OnesyIconMaterialLandslideW100Filled';

export default IconMaterialLandslideW100Filled;
