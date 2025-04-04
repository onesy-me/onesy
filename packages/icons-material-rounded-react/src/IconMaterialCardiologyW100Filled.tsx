import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardiologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardiologyW100Filled'

      short_name='Cardiology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m436-390-61-91q-5-6-11-9.5t-14-3.5H188q-8 0-14.5-3.5T163-508q-17-31-24-57.5t-7-54.5q0-71 48.5-119.5T300-788q53 0 99 28.5t81 83.5q35-55 81-83.5t99-28.5q71 0 119.5 48.5T828-620q0 28-7 54.5T797-508q-4 7-10.5 10.5T772-494H606l-75-113q-2-3-5.5-4.5T518-613q-4 0-7 2.5t-4 6.5l-71 214Zm44 193q-11 0-21.5-4T440-213q-60-55-121.5-112.5T206-448q-5-5-1.5-11.5T215-466h137l76 114q2 4 6 5t8 1q4 0 6.5-2.5t4.5-6.5l71-213 59 89q5 6 11 9.5t14 3.5h138q7 0 10 6.5t-2 11.5q-51 65-112.5 122.5T520-213q-8 8-18.5 12t-21.5 4Z"/>
    </Icon>
  );
});

IconMaterialCardiologyW100Filled.displayName = 'OnesyIconMaterialCardiologyW100Filled';

export default IconMaterialCardiologyW100Filled;
