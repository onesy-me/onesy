import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloseSmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseSmallFilled'

      short_name='CloseSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M335.28-279 279-335l144.72-145L279-624l56.28-56L480-535.39 623.72-680 680-624 535.28-480 680-335l-56.28 56L480-423.61 335.28-279Z"/>
    </Icon>
  );
});

IconMaterialCloseSmallFilled.displayName = 'OnesyIconMaterialCloseSmallFilled';

export default IconMaterialCloseSmallFilled;
