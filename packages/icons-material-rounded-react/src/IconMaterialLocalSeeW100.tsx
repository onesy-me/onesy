import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalSeeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalSeeW100'

      short_name='LocalSee'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-400ZM192-132q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l68-75q2-2 4.5-3t5.5-1q9 0 12.5 8t-2.5 15l-58 64q-8 10-20 15t-25 5H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h576q14 0 23-9t9-23v-113q0-6 4-10t10-4q6 0 10 4t4 10v113q0 26-17 43t-43 17H192Zm288-128q40 0 73.5-20.5T605-336q4-7 3-13.5t-7-10.5q-5-3-11-1t-8 8q-14 30-41.5 47.5T480-288q-47 0-79.5-32.5T368-400q0-22 7.5-41t21.5-34q14-15 32-24.5t40-11.5q6-1 9.5-5.5T481-527q-1-6-5-9.5t-10-2.5q-27 3-50 14.5T376-494q-17 19-26.5 43t-9.5 51q0 58 41 99t99 41Zm240-672q-84 0-148 59t-64 159q0 96 64 166.5T699-417q5 4 10.5 6t10.5 2q6 0 11-2t10-6q63-60 127-130.5T932-714q0-100-64-159t-148-59Zm0 498Q600-546 568-603.5T536-713q0-94 58-142t126-48q68 0 126 48t58 142q0 52-32 109.5T720-434Zm0-235Zm-55 39 21-68-56-45h68l22-67 22 67h68l-55 45 21 68-56-42-55 42Z"/>
    </Icon>
  );
});

IconMaterialLocalSeeW100.displayName = 'OnesyIconMaterialLocalSeeW100';

export default IconMaterialLocalSeeW100;
