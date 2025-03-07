import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaceDashboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardW100'

      short_name='SpaceDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h234v-560H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm262 0h234q12 0 22-10t10-22v-248H494v280Zm0-308h266v-220q0-12-10-22t-22-10H494v252Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboardW100.displayName = 'OnesyIconMaterialSpaceDashboardW100';

export default IconMaterialSpaceDashboardW100;
