import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackGroupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackGroupFilled'

      short_name='StackGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80v-240H80v-560h560v240h240v560H320Z"/>
    </Icon>
  );
});

IconMaterialStackGroupFilled.displayName = 'OnesyIconMaterialStackGroupFilled';

export default IconMaterialStackGroupFilled;
