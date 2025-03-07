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
      <path d="m436-390-61-91q-5-6-11-9.5t-14-3.5H172q-23-35-31.5-65t-8.5-61q0-71 48.5-119.5T300-788q53 0 99 28.5t81 83.5q35-55 81-83.5t99-28.5q71 0 119.5 48.5T828-620q0 31-8.5 61T788-494H606l-75-113q-2-3-5.5-4.5T518-613q-4 0-7 2.5t-4 6.5l-71 214Zm44 214-22-20q-102-93-166-157T192-466h160l76 114q2 4 6 5t8 1q4 0 6.5-2.5t4.5-6.5l71-213 59 89q5 6 11 9.5t14 3.5h160q-36 49-100 113T502-196l-22 20Z"/>
    </Icon>
  );
});

IconMaterialCardiologyW100Filled.displayName = 'OnesyIconMaterialCardiologyW100Filled';

export default IconMaterialCardiologyW100Filled;
