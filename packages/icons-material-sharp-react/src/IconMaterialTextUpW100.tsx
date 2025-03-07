import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextUpW100'

      short_name='TextUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M455-232v-28h344v28H455Zm158-150v-292l-90 90-20-20 124-124 124 124-20 20-90-90v292h-28Zm-452 0 142-360h14l144 360h-32l-44-108H235l-44 108h-30Zm84-134h130l-64-164h-4l-62 164Z"/>
    </Icon>
  );
});

IconMaterialTextUpW100.displayName = 'OnesyIconMaterialTextUpW100';

export default IconMaterialTextUpW100;
