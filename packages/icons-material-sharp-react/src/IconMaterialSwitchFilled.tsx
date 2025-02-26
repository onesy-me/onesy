import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchFilled'

      short_name='Switch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280h320v-400H320v400Zm80-80v-240h160v240H400Zm40-120h80v-80h-80v80ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialSwitchFilled.displayName = 'OnesyIconMaterialSwitchFilled';

export default IconMaterialSwitchFilled;
