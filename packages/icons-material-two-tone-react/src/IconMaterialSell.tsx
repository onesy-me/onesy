import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSell = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sell'

      short_name='Sell'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M4,4v7.17L12.83,20L20,12.83L11.17,4H4z M6.5,8C5.67,8,5,7.33,5,6.5S5.67,5,6.5,5S8,5.67,8,6.5 S7.33,8,6.5,8z" opacity=".3"/><path d="M21.41,11.41l-8.83-8.83C12.21,2.21,11.7,2,11.17,2H4C2.9,2,2,2.9,2,4v7.17c0,0.53,0.21,1.04,0.59,1.41l8.83,8.83 c0.78,0.78,2.05,0.78,2.83,0l7.17-7.17C22.2,13.46,22.2,12.2,21.41,11.41z M12.83,20L4,11.17V4h7.17L20,12.83L12.83,20z"/><circle cx="6.5" cy="6.5" r="1.5"/></g></g>
    </Icon>
  );
});

IconMaterialSell.displayName = 'OnesyIconMaterialSell';

export default IconMaterialSell;
