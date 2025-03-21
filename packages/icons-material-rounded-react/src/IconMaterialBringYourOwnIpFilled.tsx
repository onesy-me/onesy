import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBringYourOwnIpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BringYourOwnIpFilled'

      short_name='BringYourOwnIp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q10 0 22 .5t22 1.5q17 2 26 14t9 30q0 17-11 27.5t-28 8.5q-10-1-20-.5t-20 .5q-26 36-45 75.5T404-640h76q17 0 28.5 11.5T520-600q0 17-11.5 28.5T480-560h-94q-3 20-4.5 40t-1.5 40q0 20 1.5 40t4.5 40h188q3-20 4.5-40t1.5-40v-19q0-9-1-19-2-16 9.5-29t27.5-13q17 0 29 10t14 27q1 10 1 21.5v21.5q0 20-1.5 40t-4.5 40h136q5-20 7.5-40t2.5-40v-18q0-8-2-18-2-16 9-30t27-14q18 0 30 9.5t14 26.5q1 10 1.5 22t.5 22q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM170-400h136q-3-20-4.5-40t-1.5-40q0-20 1.5-40t4.5-40H170q-5 20-7.5 40t-2.5 40q0 20 2.5 40t7.5 40Zm34-240h118q9-37 22.5-72.5T376-782q-55 18-99 54.5T204-640Zm496 0q-25 0-42.5-17.5T640-700v-120q0-25 17.5-42.5T700-880h120q25 0 42.5 17.5T880-820v120q0 25-17.5 42.5T820-640H700Zm80-120h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6ZM376-178q-18-34-31.5-69.5T322-320H204q29 51 73 87.5t99 54.5Zm104 16q26-36 45-75.5t31-82.5H404q12 43 31 82.5t45 75.5Zm104-16q55-18 99-54.5t73-87.5H638q-9 37-22.5 72.5T584-178Z"/>
    </Icon>
  );
});

IconMaterialBringYourOwnIpFilled.displayName = 'OnesyIconMaterialBringYourOwnIpFilled';

export default IconMaterialBringYourOwnIpFilled;
