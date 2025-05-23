import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountCircleOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountCircleOffW100Filled'

      short_name='AccountCircleOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q57 0 109.5-19.5T685-235l-73-73q-32-13-65-19.5t-67-6.5q-52 0-101 15t-94 41q-14 8-14.5 23.5T282-229q42 34 93 51.5T480-160Zm362 82L706-214q-48 40-105.5 61T480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-62 20.5-119.5T214-705L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5Zm-75-242q-8 0-14.5-2.5T740-331L580-491q-6-6-7-14.5t4-15.5q8-14 12.5-28.5T594-580q0-48-33-81t-81-33q-16 0-30.5 4.5T421-677q-7 5-15.5 4t-14.5-7l-60-60q-6-6-8.5-12.5T320-767q0-11 5-19.5t16-13.5q33-14 68-21t71-7q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 36-7 71t-21 68q-5 11-13.5 16t-19.5 5Z"/>
    </Icon>
  );
});

IconMaterialAccountCircleOffW100Filled.displayName = 'OnesyIconMaterialAccountCircleOffW100Filled';

export default IconMaterialAccountCircleOffW100Filled;
