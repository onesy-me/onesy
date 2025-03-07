import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopPanelCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelCloseW100Filled'

      short_name='TopPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m459-444-70.78 70.78Q381-366 384.75-356.5 388.5-347 399-347h161.88q10.12 0 14.12-9.5t-3.25-16.75L500.7-444.3Q492-453 480-453t-21 9ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm-32-440v380q0 12 10 22t22 10h496q12 0 22-10t10-22v-380H200Z"/>
    </Icon>
  );
});

IconMaterialTopPanelCloseW100Filled.displayName = 'OnesyIconMaterialTopPanelCloseW100Filled';

export default IconMaterialTopPanelCloseW100Filled;
