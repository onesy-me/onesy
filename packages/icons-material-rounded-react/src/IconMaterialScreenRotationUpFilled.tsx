import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenRotationUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationUpFilled'

      short_name='ScreenRotationUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M567-160H320q-33 0-56.5-23.5T240-240v-320q0-18 12-29t28-11q17 0 28.5 12t11.5 29v319h247l-45-45q-5-6-8-13t-3-15q0-8 3-15t8-13q6-6 13.5-9t15.5-3q8 0 15 3t13 9l113 113q6 6 9 13t3 15q0 8-3 15t-9 13L578-58q-6 6-12.5 9T551-46q-8 0-15.5-3.5T522-59q-6-6-9-13t-3-15q0-8 3-15t9-13l45-45Zm153-560v320q0 18-12 29t-28 11q-17 0-28.5-12T640-401v-319H393l45 45q11 11 11 27.5T438-619q-12 12-28.5 12T381-619L268-732q-6-6-9-13t-3-15q0-8 3-15t9-13l114-114q12-12 28-11.5t28 12.5q11 12 11.5 28T438-845l-45 45h247q33 0 56.5 23.5T720-720Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationUpFilled.displayName = 'OnesyIconMaterialScreenRotationUpFilled';

export default IconMaterialScreenRotationUpFilled;
