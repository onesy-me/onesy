import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCookieOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieOffW100'

      short_name='CookieOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M722-622q0 37 23.5 71t57.5 45q11 4 18.5 11t6.5 18q-2 42-13 82t-32 76q-3 5-8.5 6.5T764-314q-5-3-6.5-8.5T759-333q18-32 29.5-68t13.5-77q-50-20-77.5-56T693-622q-78-5-131.5-50.5T505-798q-49-5-91.5 5.5T332-760q-6 3-12 1.5t-10-6.5q-4-5-2-11.5t7-9.5q42-23 87.5-32.5T496-828q14 0 25.5 7t11.5 20q0 68 50 107t114 44q11 1 18 9t7 19ZM340-370q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T390-420q0 20-14.5 35T340-370Zm140 238q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-65 22-122t61-103L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5L705-215q-46 39-103 61t-122 22Zm0-28q59 0 111-20t94-55L235-685q-35 42-55 94t-20 111q0 133 93.5 226.5T480-160Zm-20-300Zm100-102Z"/>
    </Icon>
  );
});

IconMaterialCookieOffW100.displayName = 'OnesyIconMaterialCookieOffW100';

export default IconMaterialCookieOffW100;
