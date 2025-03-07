import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsLevelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLevelW100'

      short_name='ToolsLevel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-332q-25 0-42.5-17.5T132-392v-176q0-25 17.5-42.5T192-628h576q25 0 42.5 17.5T828-568v176q0 25-17.5 42.5T768-332H192Zm0-28h576q14 0 23-9t9-23v-176q0-14-9-23t-23-9H644q11 12 17.5 27.5T668-540q0 35-26 61.5T580-452H380q-35 0-61.5-26.5T292-540q0-17 6.5-32.5T316-600H192q-14 0-23 9t-9 23v176q0 14 9 23t23 9Zm188-120h86v-120h-86q-24 0-42 18t-18 42q0 24 18 42t42 18Zm114 0h86q24 0 42-18t18-42q0-24-18-42t-42-18h-86v120Zm274 120H160h32-32 640-32 32-32Z"/>
    </Icon>
  );
});

IconMaterialToolsLevelW100.displayName = 'OnesyIconMaterialToolsLevelW100';

export default IconMaterialToolsLevelW100;
