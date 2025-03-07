import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKitchen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Kitchen'

      short_name='Kitchen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 5h2v3H8zm0 7h2v5H8zm-2 8h12v-9.02H6V20zm2-8h2v5H8v-5zM6 9h12V4H6v5zm2-4h2v3H8V5z" opacity=".3"/><path d="M18 2.01 6 2a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"/>
    </Icon>
  );
});

IconMaterialKitchen.displayName = 'OnesyIconMaterialKitchen';

export default IconMaterialKitchen;
