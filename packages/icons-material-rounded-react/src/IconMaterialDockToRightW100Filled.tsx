import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockToRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToRightW100Filled'

      short_name='DockToRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h496q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm116-28h380q12 0 22-10t10-22v-496q0-12-10-22t-22-10H348v560Z"/>
    </Icon>
  );
});

IconMaterialDockToRightW100Filled.displayName = 'OnesyIconMaterialDockToRightW100Filled';

export default IconMaterialDockToRightW100Filled;
