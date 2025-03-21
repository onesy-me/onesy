import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveModeratorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveModeratorW100'

      short_name='RemoveModerator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M748-682v166q0 33-6 69t-21 77q-3 8-8.5 10t-10.5 0q-5-2-8-6.5t-1-10.5q13-31 20-67.5t7-71.5v-167q0-10-5.5-18T699-713l-208-77q-5-2-11-2t-11 2l-137 51q-4 2-7.5 1t-6.5-4q-5-5-4-13t9-11l136-50q10-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5ZM480-138q-4 0-22-5-115-45-180.5-148T212-516v-192l-70-70q-4-4-4.5-9.5T142-798q5-5 10-5t10 5l640 640q4 4 4.5 9.5T802-138q-5 5-10 5t-10-5L660-260q-32 40-71 69t-87 48q-5 2-11 3.5t-11 1.5Zm-40-342Zm67-73Zm-27 389q45-14 90.5-48.5T640-280L240-680v164q0 121 68 220t172 132Z"/>
    </Icon>
  );
});

IconMaterialRemoveModeratorW100.displayName = 'OnesyIconMaterialRemoveModeratorW100';

export default IconMaterialRemoveModeratorW100;
