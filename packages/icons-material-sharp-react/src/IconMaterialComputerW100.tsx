import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialComputerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerW100'

      short_name='Computer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-28h800v28H80Zm52-68v-496h696v496H132Zm28-28h640v-440H160v440Zm0 0v-440 440Z"/>
    </Icon>
  );
});

IconMaterialComputerW100.displayName = 'OnesyIconMaterialComputerW100';

export default IconMaterialComputerW100;
