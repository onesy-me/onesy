import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooksTwo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwo'

      short_name='LooksTwo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280h240v-80H440v-80h160v-240H360v80h160v80H360v240ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialLooksTwo.displayName = 'OnesyIconMaterialLooksTwo';

export default IconMaterialLooksTwo;
