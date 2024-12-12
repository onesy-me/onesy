import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks3Filled'

      short_name='Looks3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280h240v-400H360v80h160v80h-80v80h80v80H360v80ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialLooks3Filled.displayName = 'OnesyIconMaterialLooks3Filled';

export default IconMaterialLooks3Filled;
