import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatClearW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatClearW100'

      short_name='FormatClear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m494-566-21-21 41-99H372l-28-28h410v28H545l-51 120Zm274 414L453-468l-96 226h-31l106-247-290-289 20-20 626 626-20 20Z"/>
    </Icon>
  );
});

IconMaterialFormatClearW100.displayName = 'OnesyIconMaterialFormatClearW100';

export default IconMaterialFormatClearW100;
