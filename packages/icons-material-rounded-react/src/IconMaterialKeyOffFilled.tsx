import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyOffFilled'

      short_name='KeyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M763-84 488-359q-32 54-87 86.5T280-240q-100 0-170-70T40-480q0-66 32.5-121t86.5-87l-75-75q-11-11-11-27.5T84-819q12-12 28.5-12t28.5 12l678 679q11 11 11.5 27.5T819-84q-11 11-28 11t-28-11Zm140-397q0 8-2.5 15t-8.5 13L788-349q-6 6-12.5 9t-15.5 3q-9 0-15.5-2.5T732-348l-52-52-3 4-164-164h311q8 0 15.5 3t12.5 8l39 39q6 6 9 13.5t3 15.5ZM280-360q43 0 75-26.5t41-64.5l-22.5-22.5-50-50-50-50L251-596q-42 9-66.5 42.5T160-480q0 50 35 85t85 35Z"/>
    </Icon>
  );
});

IconMaterialKeyOffFilled.displayName = 'OnesyIconMaterialKeyOffFilled';

export default IconMaterialKeyOffFilled;
