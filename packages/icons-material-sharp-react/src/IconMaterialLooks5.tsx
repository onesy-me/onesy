import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks5 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks5'

      short_name='Looks5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280h240v-240H440v-80h160v-80H360v240h160v80H360v80ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialLooks5.displayName = 'OnesyIconMaterialLooks5';

export default IconMaterialLooks5;
