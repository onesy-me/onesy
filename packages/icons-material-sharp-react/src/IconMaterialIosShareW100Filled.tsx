import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIosShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosShareW100Filled'

      short_name='IosShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-92v-496h134v28H240v440h480v-440H614v-28h134v496H212Zm254-254v-432l-90 90-20-20 124-124 124 124-20 20-90-90v432h-28Z"/>
    </Icon>
  );
});

IconMaterialIosShareW100Filled.displayName = 'OnesyIconMaterialIosShareW100Filled';

export default IconMaterialIosShareW100Filled;
