import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReportFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportFilled'

      short_name='Report'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Z"/>
    </Icon>
  );
});

IconMaterialReportFilled.displayName = 'OnesyIconMaterialReportFilled';

export default IconMaterialReportFilled;
