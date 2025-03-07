import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPublicOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublicOffW100'

      short_name='PublicOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-65 22-122t61-103L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5L705-215q-46 39-103 61t-122 22Zm-40-30v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm388-318q0 45-10.5 86.5T787-315q-3 5-9 6.5t-11-1.5q-5-3-6.5-8.5T762-329q19-35 28.5-73t9.5-78q0-99-54-180.5T600-778v18q0 33-23.5 56.5T520-680h-60v32q0 10-9.5 13.5T434-638L332-740q-14-14-10.5-33t20.5-27q32-14 66.5-21t71.5-7q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480Z"/>
    </Icon>
  );
});

IconMaterialPublicOffW100.displayName = 'OnesyIconMaterialPublicOffW100';

export default IconMaterialPublicOffW100;
