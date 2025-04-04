import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandCircleDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandCircleDown'

      short_name='ExpandCircleDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-453-95-95q-11-11-27.5-11T329-548q-12 12-12 28.5t12 28.5l123 123q12 12 28 12t28-12l124-124q12-12 11.5-28T631-548q-12-11-28-11.5T575-548l-95 95Zm0 373q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialExpandCircleDown.displayName = 'OnesyIconMaterialExpandCircleDown';

export default IconMaterialExpandCircleDown;
