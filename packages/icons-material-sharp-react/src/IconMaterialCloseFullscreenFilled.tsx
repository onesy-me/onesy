import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloseFullscreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFullscreenFilled'

      short_name='CloseFullscreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m136-80-56-56 264-264H160v-80h320v320h-80v-184L136-80Zm344-400v-320h80v184l264-264 56 56-264 264h184v80H480Z"/>
    </Icon>
  );
});

IconMaterialCloseFullscreenFilled.displayName = 'OnesyIconMaterialCloseFullscreenFilled';

export default IconMaterialCloseFullscreenFilled;
