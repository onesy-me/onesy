import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnifyFullscreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnifyFullscreen'

      short_name='MagnifyFullscreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Zm400-160h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z"/>
    </Icon>
  );
});

IconMaterialMagnifyFullscreen.displayName = 'OnesyIconMaterialMagnifyFullscreen';

export default IconMaterialMagnifyFullscreen;
