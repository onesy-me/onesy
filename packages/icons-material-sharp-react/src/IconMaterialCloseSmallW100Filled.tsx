import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloseSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseSmallW100Filled'

      short_name='CloseSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336.28-315 315-336l143.72-144L315-623l21.28-21L480-500.39 622.72-644 644-623 500.28-480 644-336l-21.28 21L480-458.61 336.28-315Z"/>
    </Icon>
  );
});

IconMaterialCloseSmallW100Filled.displayName = 'OnesyIconMaterialCloseSmallW100Filled';

export default IconMaterialCloseSmallW100Filled;
