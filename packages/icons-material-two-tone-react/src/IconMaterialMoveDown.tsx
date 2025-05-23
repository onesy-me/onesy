import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveDown'

      short_name='MoveDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="3" opacity=".3" width="5" x="15" y="6"/><path d="M3,11c0,2.45,1.76,4.47,4.08,4.91l-1.49-1.49L7,13l4,4.01L7,21l-1.41-1.41l1.58-1.58l0-0.06C3.7,17.54,1,14.58,1,11 c0-3.87,3.13-7,7-7h3v2H8C5.24,6,3,8.24,3,11z"/><path d="M22,11V4h-9v7H22z M20,9h-5V6h5V9z"/><rect height="7" width="9" x="13" y="13"/></g></g>
    </Icon>
  );
});

IconMaterialMoveDown.displayName = 'OnesyIconMaterialMoveDown';

export default IconMaterialMoveDown;
