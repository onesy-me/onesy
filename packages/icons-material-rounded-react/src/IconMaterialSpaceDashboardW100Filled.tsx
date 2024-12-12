import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaceDashboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardW100Filled'

      short_name='SpaceDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h174q24.75 0 42.38 17.62Q466-752.75 466-728v496q0 24.75-17.62 42.37Q430.75-172 406-172H232Zm322 0q-24.75 0-42.37-17.63Q494-207.25 494-232v-188q0-24.75 17.63-42.38Q529.25-480 554-480h174q24.75 0 42.38 17.62Q788-444.75 788-420v188q0 24.75-17.62 42.37Q752.75-172 728-172H554Zm0-336q-24.75 0-42.37-17.63Q494-543.25 494-568v-160q0-24.75 17.63-42.38Q529.25-788 554-788h174q24.75 0 42.38 17.62Q788-752.75 788-728v160q0 24.75-17.62 42.37Q752.75-508 728-508H554Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboardW100Filled.displayName = 'OnesyIconMaterialSpaceDashboardW100Filled';

export default IconMaterialSpaceDashboardW100Filled;
