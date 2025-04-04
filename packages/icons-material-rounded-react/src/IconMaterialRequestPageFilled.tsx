import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRequestPageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPageFilled'

      short_name='RequestPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280v20q0 8 6 14t14 6h40q8 0 14-6t6-14v-20h40q17 0 28.5-11.5T600-320v-120q0-17-11.5-28.5T560-480H440v-40h120q17 0 28.5-11.5T600-560q0-17-11.5-28.5T560-600h-40v-20q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v20h-40q-17 0-28.5 11.5T360-560v120q0 17 11.5 28.5T400-400h120v40H400q-17 0-28.5 11.5T360-320q0 17 11.5 28.5T400-280h40ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Z"/>
    </Icon>
  );
});

IconMaterialRequestPageFilled.displayName = 'OnesyIconMaterialRequestPageFilled';

export default IconMaterialRequestPageFilled;
