import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalAlignCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignCenterW100Filled'

      short_name='VerticalAlignCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-132v-220l-90 90-20-20 124-124 124 124-20 20-90-90v220h-28ZM212-466v-28h536v28H212Zm268-88L356-678l20-20 90 90v-220h28v220l90-90 20 20-124 124Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignCenterW100Filled.displayName = 'OnesyIconMaterialVerticalAlignCenterW100Filled';

export default IconMaterialVerticalAlignCenterW100Filled;
