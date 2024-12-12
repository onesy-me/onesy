import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDashboardCustomizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardCustomizeW100Filled'

      short_name='DashboardCustomize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-814h268v268H146v-268Zm400 0h268v268H546v-268ZM146-414h268v268H146v-268Zm520 0h28v120h120v28H694v120h-28v-120H546v-28h120v-120Z"/>
    </Icon>
  );
});

IconMaterialDashboardCustomizeW100Filled.displayName = 'OnesyIconMaterialDashboardCustomizeW100Filled';

export default IconMaterialDashboardCustomizeW100Filled;
