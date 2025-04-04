import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRightClickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightClickW100'

      short_name='RightClick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M194-164q-6 6-15 6t-15-6q-6-6-6-15t6-15l184-183-55-18q-11-4-11-15t11-14l160-48q8-2 14.5 4.5T472-453l-48 160q-3 11-14 11t-15-11l-18-55-183 184Zm474-316q0 60-33 107t-87 68q-5 2-10.5 0t-7.5-7q-2-5 0-10.5t7-7.5q45-17 74-58t29-92q0-66-47-113t-113-47q-51 0-91.5 28.5T331-538q-2 5-7.5 8t-10.5 1q-5-2-7.5-8t-.5-11q20-54 67.5-87T480-668q78 0 133 55t55 133Z"/>
    </Icon>
  );
});

IconMaterialRightClickW100.displayName = 'OnesyIconMaterialRightClickW100';

export default IconMaterialRightClickW100;
