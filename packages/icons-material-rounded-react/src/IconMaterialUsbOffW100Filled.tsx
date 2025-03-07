import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUsbOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbOffW100Filled'

      short_name='UsbOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-126q-23 0-38.5-15.5T426-180q0-18 11-32.5t29-19.5v-114H346q-26 0-43-17t-17-43v-82q-17-5-28.5-18.5T246-540q0-23 15.5-38.5T300-594L129-765q-4-4-4-9t5-10q5-5 10-5t10 5l649 649q4 4 4 9t-5 10q-5 5-10 5t-10-5L548-346h-54v114q18 5 29 19.5t11 32.5q0 23-15.5 38.5T480-126Zm234-452v76q0 7-4.5 11.5T698-486h-24v80q0 7-4.5 10.5T660-392q-5 0-9.5-4t-4.5-11v-79h-25q-6 0-10.5-4.5T606-501v-77q0-7 4.5-11.5T622-594h76q7 0 11.5 4.5T714-578ZM346-374h120v-54L354-540q0 20-11.5 33.5T314-488v82q0 12 10 22t22 10Zm120-332h-25q-9 0-13-8t2-16l37-49q3-4 13-6 4 0 7.5 1.5t5.5 4.5l36 47q6 8 2 17t-15 9h-22v120q0 7-4.5 10.5T480-572q-5 0-9.5-3.5T466-586v-120Z"/>
    </Icon>
  );
});

IconMaterialUsbOffW100Filled.displayName = 'OnesyIconMaterialUsbOffW100Filled';

export default IconMaterialUsbOffW100Filled;
