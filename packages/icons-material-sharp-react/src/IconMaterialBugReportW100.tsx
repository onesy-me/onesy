import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBugReportW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BugReportW100'

      short_name='BugReport'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200q66 0 113-47t47-113v-160q0-66-47-113t-113-47q-66 0-113 47t-47 113v160q0 66 47 113t113 47Zm-64-146h128v-28H416v28Zm0-160h128v-28H416v28Zm64 66Zm0 268q-51 0-93.5-25T318-266H212v-28h92q-11-32-11.5-65.5T292-426h-80v-28h80q0-34-.5-67.5T304-586h-92v-28h106q15-27 38-47.5t52-32.5l-74-74 18-18 84 84q22-6 44-6t44 6l86-84 18 18-74 74q29 12 51 32.5t37 47.5h106v28h-92q13 31 12.5 64.5T668-454h80v28h-80q0 33-.5 66.5T656-294h92v28H642q-26 44-68.5 69T480-172Z"/>
    </Icon>
  );
});

IconMaterialBugReportW100.displayName = 'OnesyIconMaterialBugReportW100';

export default IconMaterialBugReportW100;
