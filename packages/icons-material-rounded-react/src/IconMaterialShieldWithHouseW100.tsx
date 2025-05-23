import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldWithHouseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseW100'

      short_name='ShieldWithHouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-612 249-432q18 79 64.5 144T426-187v-117q0-13 8.5-21.5T456-334h48q13 0 21.5 8.5T534-304v117q66-36 112.5-101T711-432L480-612Zm-240-71v167q0 12 1 26.5t3 26.5l236-184 236 184q2-12 3-26.5t1-26.5v-167q0-10-5.5-18T699-713l-208-77q-5-2-11-2t-11 2l-208 77q-10 4-15.5 12t-5.5 18Zm240 544q-5 0-11-1t-11-3q-113-45-179.5-148.5T212-516v-166q0-19 11-34.5t28-22.5l208-77q11-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5v166q0 121-66.5 224.5T502-143q-5 2-11 3t-11 1Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHouseW100.displayName = 'OnesyIconMaterialShieldWithHouseW100';

export default IconMaterialShieldWithHouseW100;
