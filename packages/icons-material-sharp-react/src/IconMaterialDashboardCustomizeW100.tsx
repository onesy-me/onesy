import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDashboardCustomizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardCustomizeW100'

      short_name='DashboardCustomize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-814h268v268H146v-268Zm28 28v212-212Zm372-28h268v268H546v-268Zm28 28v212-212ZM146-414h268v268H146v-268Zm28 28v212-212Zm492-28h28v120h120v28H694v120h-28v-120H546v-28h120v-120Zm-92-372v212h212v-212H574Zm-400 0v212h212v-212H174Zm0 400v212h212v-212H174Z"/>
    </Icon>
  );
});

IconMaterialDashboardCustomizeW100.displayName = 'OnesyIconMaterialDashboardCustomizeW100';

export default IconMaterialDashboardCustomizeW100;
