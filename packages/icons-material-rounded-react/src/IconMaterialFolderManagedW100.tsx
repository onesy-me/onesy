import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderManagedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderManagedW100'

      short_name='FolderManaged'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M705-217q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Zm-1 54q-5 0-9.5-4t-4.5-9l-1-15q-26-5-42-14t-30-26l-16 7q-5 2-9 1t-7-5l-2-3q-3-5-3-9.5t5-8.5l12-10q-8-24-8-46t8-46l-12-10q-4-3-5-7.5t2-9.5l3-4q3-4 7-5t9 1l16 7q14-18 30-26.5t42-13.5l1-15q0-5 4.5-9t9.5-4h2q5 0 9.5 4t4.5 9l1 15q26 5 42 13.5t30 26.5l16-7q5-2 9-1t7 5l2 3q3 5 3 9.5t-5 8.5l-12 10q8 24 8 46t-8 46l12 10q4 3 5 7.5t-2 9.5l-3 4q-3 4-7 5t-9-1l-16-7q-14 17-30 26t-42 14l-1 15q0 5-4.5 9t-9.5 4h-2Zm-544-77v-480 179-19 320Zm32 28q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v81q0 6-4 10t-10 4q-6 0-10-4t-4-10v-81q0-14-9-23t-23-9H448l-80-80H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h289q6 0 10 4t4 10q0 6-4 10t-10 4H192Z"/>
    </Icon>
  );
});

IconMaterialFolderManagedW100.displayName = 'OnesyIconMaterialFolderManagedW100';

export default IconMaterialFolderManagedW100;
