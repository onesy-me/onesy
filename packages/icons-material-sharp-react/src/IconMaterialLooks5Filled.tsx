import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks5Filled'

      short_name='Looks5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280h240v-240H440v-80h160v-80H360v240h160v80H360v80ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialLooks5Filled.displayName = 'OnesyIconMaterialLooks5Filled';

export default IconMaterialLooks5Filled;
