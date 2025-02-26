import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Switch'

      short_name='Switch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280h320v-400H320v400Zm80-80v-240h160v240H400Zm40-120h80v-80h-80v80ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialSwitch.displayName = 'OnesyIconMaterialSwitch';

export default IconMaterialSwitch;
