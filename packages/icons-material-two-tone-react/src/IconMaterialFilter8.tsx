import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter8 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter8'

      short_name='Filter8'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 17h14V3H7v14zm4-5.5c0-.83.67-1.5 1.5-1.5-.83 0-1.5-.67-1.5-1.5V7c0-1.11.9-2 2-2h2c1.1 0 2 .89 2 2v1.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V13c0 1.11-.9 2-2 2h-2c-1.1 0-2-.89-2-2v-1.5zM13 7h2v2h-2zm0 4h2v2h-2z" opacity=".3"/><path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2zm10-8h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z"/>
    </Icon>
  );
});

IconMaterialFilter8.displayName = 'OnesyIconMaterialFilter8';

export default IconMaterialFilter8;
