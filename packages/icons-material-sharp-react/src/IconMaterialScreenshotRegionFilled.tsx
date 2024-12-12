import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotRegionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotRegionFilled'

      short_name='ScreenshotRegion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-80v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM200-200v-200h80v120h120v80H200Zm0-360v-200h200v80H280v120h-80Zm480 0v-120H560v-80h200v200h-80Z"/>
    </Icon>
  );
});

IconMaterialScreenshotRegionFilled.displayName = 'OnesyIconMaterialScreenshotRegionFilled';

export default IconMaterialScreenshotRegionFilled;
