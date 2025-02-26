import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRightPanelCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelCloseW100Filled'

      short_name='RightPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M347-399.12q0 10.12 9.5 14.12t16.75-3.25l71.05-71.05Q453-468 453-480t-9-21l-70.78-70.78Q366-579 356.5-575.25 347-571.5 347-561v161.88ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm380-28v-560H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h380Z"/>
    </Icon>
  );
});

IconMaterialRightPanelCloseW100Filled.displayName = 'OnesyIconMaterialRightPanelCloseW100Filled';

export default IconMaterialRightPanelCloseW100Filled;
