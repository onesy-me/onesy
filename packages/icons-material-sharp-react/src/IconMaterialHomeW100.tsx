import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeW100'

      short_name='Home'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200h156v-234h168v234h156v-360L480-742 240-560v360Zm-28 28v-402l268-203 268 203v402H536v-234H424v234H212Zm268-299Z"/>
    </Icon>
  );
});

IconMaterialHomeW100.displayName = 'OnesyIconMaterialHomeW100';

export default IconMaterialHomeW100;
