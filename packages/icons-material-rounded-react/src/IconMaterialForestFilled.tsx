import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForestFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForestFilled'

      short_name='Forest'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-120v-80h160v80q0 17-11.5 28.5T640-80h-80q-17 0-28.5-11.5T520-120Zm-240 0v-120H73q-24 0-35-21t2-41l114-178q-23 0-34.5-20.5T122-541l205-292q6-8 15-12.5t18-4.5q9 0 18 4.5t15 12.5l205 292q14 20 2.5 40.5T566-480l115 178q13 20 2 41t-35 21H440v120q0 17-11.5 28.5T400-80h-80q-17 0-28.5-11.5T280-120Zm490-120L640-440q24 0 35.5-21.5T673-503L505-743l62-90q6-8 15-12.5t18-4.5q9 0 18 4.5t15 12.5l205 292q14 20 2.5 40.5T806-480l114 178q13 20 2 41t-35 21H770Z"/>
    </Icon>
  );
});

IconMaterialForestFilled.displayName = 'OnesyIconMaterialForestFilled';

export default IconMaterialForestFilled;
