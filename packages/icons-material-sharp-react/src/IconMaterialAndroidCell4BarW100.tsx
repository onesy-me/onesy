import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAndroidCell4BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AndroidCell4BarW100'

      short_name='AndroidCell4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M131-212v-246h52v246h-52Zm215 0v-336h52v336h-52Zm215 0v-427h52v427h-52Zm215 0v-536h52v536h-52Z"/>
    </Icon>
  );
});

IconMaterialAndroidCell4BarW100.displayName = 'OnesyIconMaterialAndroidCell4BarW100';

export default IconMaterialAndroidCell4BarW100;
