import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatLineSpacingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLineSpacingFilled'

      short_name='FormatLineSpacing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m200-646-36 35q-11 11-27.5 11T108-612q-11-11-11-28t11-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q11 11 11.5 27.5T372-612q-11 11-27.5 11.5T316-611l-36-35v332l36-35q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L268-188q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L108-292q-11-11-11.5-27.5T108-348q11-11 27.5-11.5T164-349l36 35v-332Zm320 446q-17 0-28.5-11.5T480-240q0-17 11.5-28.5T520-280h320q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200H520Zm0-240q-17 0-28.5-11.5T480-480q0-17 11.5-28.5T520-520h320q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H520Zm0-240q-17 0-28.5-11.5T480-720q0-17 11.5-28.5T520-760h320q17 0 28.5 11.5T880-720q0 17-11.5 28.5T840-680H520Z"/>
    </Icon>
  );
});

IconMaterialFormatLineSpacingFilled.displayName = 'OnesyIconMaterialFormatLineSpacingFilled';

export default IconMaterialFormatLineSpacingFilled;
