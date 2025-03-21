import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCookieOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieOffW100Filled'

      short_name='CookieOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-370q21 0 35.5-15t14.5-35q0-21-14.5-35.5T340-470q-20 0-35 14.5T290-420q0 20 15 35t35 15Zm140 238q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-65 22-122t61-103L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5L705-215q-46 39-103 61t-122 22Zm242-490q0 37 23.5 71t57.5 45q11 4 18.5 11t6.5 18q-2 38-12 75t-27 71q-3 5-7 8t-9 5q-5 2-10.5 1.5T752-320L319-752q-4-5-5-11.5t1-11.5q2-5 5.5-10t8.5-8q39-19 81-27t86-8q14 0 25.5 7t11.5 20q0 68 50 107t114 44q11 1 18 9t7 19Z"/>
    </Icon>
  );
});

IconMaterialCookieOffW100Filled.displayName = 'OnesyIconMaterialCookieOffW100Filled';

export default IconMaterialCookieOffW100Filled;
