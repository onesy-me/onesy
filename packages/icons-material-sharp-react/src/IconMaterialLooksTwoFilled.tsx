import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooksTwoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoFilled'

      short_name='LooksTwo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280h240v-80H440v-80h160v-240H360v80h160v80H360v240ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialLooksTwoFilled.displayName = 'OnesyIconMaterialLooksTwoFilled';

export default IconMaterialLooksTwoFilled;
