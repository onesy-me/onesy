import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTerminalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TerminalW100Filled'

      short_name='Terminal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h640v-400H160v400Zm140-77-19-19 103-104-104-104 20-19 123 123-123 123Zm206 11v-28h188v28H506Z"/>
    </Icon>
  );
});

IconMaterialTerminalW100Filled.displayName = 'OnesyIconMaterialTerminalW100Filled';

export default IconMaterialTerminalW100Filled;
