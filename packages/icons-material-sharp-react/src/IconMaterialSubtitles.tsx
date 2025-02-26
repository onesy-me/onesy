import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubtitles = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Subtitles'

      short_name='Subtitles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Zm80-80h320v-80H240v80Zm400 0h80v-80h-80v80ZM240-480h80v-80h-80v80Zm160 0h320v-80H400v80Z"/>
    </Icon>
  );
});

IconMaterialSubtitles.displayName = 'OnesyIconMaterialSubtitles';

export default IconMaterialSubtitles;
