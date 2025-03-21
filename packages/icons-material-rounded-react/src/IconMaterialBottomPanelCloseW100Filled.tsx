import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomPanelCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelCloseW100Filled'

      short_name='BottomPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m501-516 70.78-70.78q7.22-7.22 3.47-16.72Q571.5-613 561-613H399.12Q389-613 385-603.5t3.25 16.75l71.05 71.05Q468-507 480-507t21-9Zm227-272q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496Zm32 440v-380q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v380h560Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelCloseW100Filled.displayName = 'OnesyIconMaterialBottomPanelCloseW100Filled';

export default IconMaterialBottomPanelCloseW100Filled;
