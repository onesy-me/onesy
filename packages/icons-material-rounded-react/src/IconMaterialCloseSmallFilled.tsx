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
      <path d="M480-424 363.33-307q-11.07 11-28.17 11T307-307q-11-11-11-28t11-28l117-117-117-115.67q-11-11.07-11-28.17T307-652q11-11 28-11t28 11l117 117 115.67-117q11.07-11 28.17-11T652-652q12 12 12 28.5T652-596L535-480l117 116.67q11 11.07 11 28.17T652-307q-12 12-28.5 12T596-307L480-424Z"/>
    </Icon>
  );
});

IconMaterialCloseSmallFilled.displayName = 'OnesyIconMaterialCloseSmallFilled';

export default IconMaterialCloseSmallFilled;
