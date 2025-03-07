import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopPanelOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelOpenW100Filled'

      short_name='TopPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m501-368 70.78-70.78q7.22-7.22 3.47-16.72Q571.5-465 561-465H399.12Q389-465 385-455.5t3.25 16.75l71.05 71.05Q468-359 480-359t21-9ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm-32-440v380q0 12 10 22t22 10h496q12 0 22-10t10-22v-380H200Z"/>
    </Icon>
  );
});

IconMaterialTopPanelOpenW100Filled.displayName = 'OnesyIconMaterialTopPanelOpenW100Filled';

export default IconMaterialTopPanelOpenW100Filled;
