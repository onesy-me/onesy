import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StartW100Filled'

      short_name='Start'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-266v-428h28v428h-28Zm493-11-20-19 170-170H260v-28h514L606-664l19-19 203 203-203 203Z"/>
    </Icon>
  );
});

IconMaterialStartW100Filled.displayName = 'OnesyIconMaterialStartW100Filled';

export default IconMaterialStartW100Filled;
