import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatOverline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatOverline'

      short_name='FormatOverline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-760v-80h560v80H200Zm280 640q-117 0-198.5-81.5T200-400q0-117 81.5-198.5T480-680q117 0 198.5 81.5T760-400q0 117-81.5 198.5T480-120Zm0-100q75 0 127.5-52.5T660-400q0-75-52.5-127.5T480-580q-75 0-127.5 52.5T300-400q0 75 52.5 127.5T480-220Z"/>
    </Icon>
  );
});

IconMaterialFormatOverline.displayName = 'OnesyIconMaterialFormatOverline';

export default IconMaterialFormatOverline;
