import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventAvailableFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventAvailableFilled'

      short_name='EventAvailable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M438-226 296-368l58-58 84 84 168-168 58 58-226 226ZM120-80v-720h120v-80h80v80h320v-80h80v80h120v720H120Zm80-80h560v-400H200v400Z"/>
    </Icon>
  );
});

IconMaterialEventAvailableFilled.displayName = 'OnesyIconMaterialEventAvailableFilled';

export default IconMaterialEventAvailableFilled;
