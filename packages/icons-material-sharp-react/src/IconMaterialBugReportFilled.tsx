import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBugReportFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BugReportFilled'

      short_name='BugReport'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-65 0-120.5-32T272-240H160v-80h84q-3-20-3.5-40t-.5-40h-80v-80h80q0-20 .5-40t3.5-40h-84v-80h112q14-23 31.5-43t40.5-35l-64-66 56-56 86 86q28-9 57-9t57 9l88-86 56 56-66 66q23 15 41.5 34.5T688-640h112v80h-84q3 20 3.5 40t.5 40h80v80h-80q0 20-.5 40t-3.5 40h84v80H688q-32 56-87.5 88T480-120Zm-80-200h160v-80H400v80Zm0-160h160v-80H400v80Z"/>
    </Icon>
  );
});

IconMaterialBugReportFilled.displayName = 'OnesyIconMaterialBugReportFilled';

export default IconMaterialBugReportFilled;
