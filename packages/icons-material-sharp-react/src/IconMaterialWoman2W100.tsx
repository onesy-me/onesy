import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWoman2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Woman2W100'

      short_name='Woman2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M429-106v-246H300l128.53-324H531l129 324H531v246H429Zm51-624q-26.4 0-45.2-18.8Q416-767.6 416-794q0-26.4 18.8-45.2Q453.6-858 480-858q26.4 0 45.2 18.8Q544-820.4 544-794q0 26.4-18.8 45.2Q506.4-730 480-730Z"/>
    </Icon>
  );
});

IconMaterialWoman2W100.displayName = 'OnesyIconMaterialWoman2W100';

export default IconMaterialWoman2W100;
