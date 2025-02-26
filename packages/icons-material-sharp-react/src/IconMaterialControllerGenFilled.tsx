import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialControllerGenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControllerGenFilled'

      short_name='ControllerGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm0-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-104 112-112-56-56-112 112 56 56ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialControllerGenFilled.displayName = 'OnesyIconMaterialControllerGenFilled';

export default IconMaterialControllerGenFilled;
