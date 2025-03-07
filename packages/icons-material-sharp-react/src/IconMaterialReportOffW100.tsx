import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReportOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOffW100'

      short_name='ReportOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m756-316-22-22 26-26v-232L596-760H364l-26 26-20-20 34-34h256.47L788-607.76V-352l-32 36ZM494-578v-82h-28v54l28 28Zm322 474L678-242l-70 70H351.53L172-352v-256l70-70-138-138 20-20 712 712-20 20ZM536-536ZM364-200h232l62-62-396-396-62 62v232l164 164Zm116-110q-8.5 0-14.25-5.75T460-330q0-8.5 5.75-14.25T480-350q8.5 0 14.25 5.75T500-330q0 8.5-5.75 14.25T480-310Zm-20-150Z"/>
    </Icon>
  );
});

IconMaterialReportOffW100.displayName = 'OnesyIconMaterialReportOffW100';

export default IconMaterialReportOffW100;
