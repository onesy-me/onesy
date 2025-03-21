import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeftPanelOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelOpenW100Filled'

      short_name='LeftPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M495-561v161.88q0 10.12 9.5 14.12t16.75-3.25l71.05-71.05Q601-468 601-480t-9-21l-70.78-70.78Q514-579 504.5-575.25 495-571.5 495-561ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm116-28h380q12 0 22-10t10-22v-496q0-12-10-22t-22-10H348v560Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelOpenW100Filled.displayName = 'OnesyIconMaterialLeftPanelOpenW100Filled';

export default IconMaterialLeftPanelOpenW100Filled;
