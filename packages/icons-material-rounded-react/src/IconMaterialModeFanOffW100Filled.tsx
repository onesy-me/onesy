import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeFanOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeFanOffW100Filled'

      short_name='ModeFanOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M602-749q0 26-9 39t-25 24q-25 17-41 47t-21 70q-1 9-8.5 11.5T483-560L357-681q-3-3-4-9t1-12q16-51 64.5-83.5T527-818q33 0 54 20t21 49Zm93 147q51 0 87 40t36 98q0 46-25 76.5T732-358l-42-1q-3 0-6-1.5t-5-3.5L518-525q-4-5-2.5-12t7.5-9l121-46q13-5 26-7.5t25-2.5ZM434-142q-32 0-54-19.5T358-210q0-20 8.5-37t23.5-27q23-15 38.5-42.5T452-379q-13-5-23-10.5T410-403l-94 34q-14 5-26.5 8t-25.5 3q-60 0-91-40.5T142-496q0-52 24-79t65-27q22 0 49.5 10.5T322-566L125-762q-4-4-4.5-9.5T125-782q5-5 10-5t10 5l638 638q4 4 4 10t-4 10q-4 4-9.5 4t-9.5-4L600-288q2 5 2 10v10q0 55-46.5 90.5T434-142Z"/>
    </Icon>
  );
});

IconMaterialModeFanOffW100Filled.displayName = 'OnesyIconMaterialModeFanOffW100Filled';

export default IconMaterialModeFanOffW100Filled;
