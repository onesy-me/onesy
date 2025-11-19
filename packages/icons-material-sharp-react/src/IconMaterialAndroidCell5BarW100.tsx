import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAndroidCell5BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AndroidCell5BarW100'

      short_name='AndroidCell5Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-212v-173h52v173H92Zm181 0v-246h52v246h-52Zm181 0v-354h52v354h-52Zm181 0v-427h52v427h-52Zm181 0v-536h52v536h-52Z"/>
    </Icon>
  );
});

IconMaterialAndroidCell5BarW100.displayName = 'OnesyIconMaterialAndroidCell5BarW100';

export default IconMaterialAndroidCell5BarW100;
