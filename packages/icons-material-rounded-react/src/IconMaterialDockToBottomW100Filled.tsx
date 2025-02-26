import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockToBottomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToBottomW100Filled'

      short_name='DockToBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h496q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm-32-176h560v-380q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v380Z"/>
    </Icon>
  );
});

IconMaterialDockToBottomW100Filled.displayName = 'OnesyIconMaterialDockToBottomW100Filled';

export default IconMaterialDockToBottomW100Filled;
