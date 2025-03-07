import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomPanelOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelOpenW100Filled'

      short_name='BottomPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M399-495h161.88q10.12 0 14.12-9.5t-3.25-16.75L500.7-592.3Q492-601 480-601t-21 9l-70.78 70.78Q381-514 384.75-504.5 388.5-495 399-495ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm-32-176h560v-380q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v380Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelOpenW100Filled.displayName = 'OnesyIconMaterialBottomPanelOpenW100Filled';

export default IconMaterialBottomPanelOpenW100Filled;
