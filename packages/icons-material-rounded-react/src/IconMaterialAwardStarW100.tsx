import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAwardStarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AwardStarW100'

      short_name='AwardStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-403 63 39q8 5 16.5-1t6.5-16l-17-72 56-48q8-7 4.5-16T596-527l-73-7-29-67q-4-9-14-9t-14 9l-29 67-73 7q-10 1-13.5 10t4.5 16l56 48-17 72q-2 10 6.5 16t16.5 1l63-39ZM368-212h-96q-25 0-42.5-17.5T212-272v-96l-70-70q-9-9-13-20t-4-22q0-11 4-22t13-20l70-70v-96q0-25 17.5-42.5T272-748h96l70-70q9-9 20-13t22-4q11 0 22 4t20 13l70 70h96q25 0 42.5 17.5T748-688v96l70 70q9 9 13 20t4 22q0 11-4 22t-13 20l-70 70v96q0 25-17.5 42.5T688-212h-96l-70 70q-9 9-20 13t-22 4q-11 0-22-4t-20-13l-70-70Zm12-28 77 77q9 9 23 9t23-9l77-77h108q14 0 23-9t9-23v-108l77-77q9-9 9-23t-9-23l-77-77v-108q0-14-9-23t-23-9H580l-77-77q-9-9-23-9t-23 9l-77 77H272q-14 0-23 9t-9 23v108l-77 77q-9 9-9 23t9 23l77 77v108q0 14 9 23t23 9h108Zm100-240Z"/>
    </Icon>
  );
});

IconMaterialAwardStarW100.displayName = 'OnesyIconMaterialAwardStarW100';

export default IconMaterialAwardStarW100;
