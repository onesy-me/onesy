import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabletAndroidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletAndroidW100'

      short_name='TabletAndroid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-92v-776h616v776H172Zm28-172v144h560v-144H200Zm212 86h136v-28H412v28ZM200-292h560v-454H200v454Zm0-482h560v-66H200v66Zm0 0v-66 66Zm0 510v144-144Z"/>
    </Icon>
  );
});

IconMaterialTabletAndroidW100.displayName = 'OnesyIconMaterialTabletAndroidW100';

export default IconMaterialTabletAndroidW100;
