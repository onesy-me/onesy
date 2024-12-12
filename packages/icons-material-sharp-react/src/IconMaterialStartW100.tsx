import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StartW100'

      short_name='Start'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-266v-428h28v428h-28Zm493-11-20-19 170-170H260v-28h514L606-664l19-19 203 203-203 203Z"/>
    </Icon>
  );
});

IconMaterialStartW100.displayName = 'OnesyIconMaterialStartW100';

export default IconMaterialStartW100;
