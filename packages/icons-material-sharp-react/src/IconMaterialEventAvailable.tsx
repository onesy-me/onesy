import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventAvailable = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventAvailable'

      short_name='EventAvailable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M438-226 296-368l58-58 84 84 168-168 58 58-226 226ZM120-80v-720h120v-80h80v80h320v-80h80v80h120v720H120Zm80-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialEventAvailable.displayName = 'OnesyIconMaterialEventAvailable';

export default IconMaterialEventAvailable;
