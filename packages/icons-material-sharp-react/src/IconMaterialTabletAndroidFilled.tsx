import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabletAndroidFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletAndroidFilled'

      short_name='TabletAndroid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-40v-880h720v880H120Zm280-120h160v-40H400v40ZM200-320h560v-400H200v400Z"/>
    </Icon>
  );
});

IconMaterialTabletAndroidFilled.displayName = 'OnesyIconMaterialTabletAndroidFilled';

export default IconMaterialTabletAndroidFilled;
