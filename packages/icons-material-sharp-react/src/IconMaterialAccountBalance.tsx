import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountBalance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalance'

      short_name='AccountBalance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/>
    </Icon>
  );
});

IconMaterialAccountBalance.displayName = 'OnesyIconMaterialAccountBalance';

export default IconMaterialAccountBalance;
