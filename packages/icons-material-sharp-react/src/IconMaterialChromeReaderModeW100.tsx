import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromeReaderModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeReaderModeW100'

      short_name='ChromeReaderMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h306v-480H160v480Zm334 0h306v-480H494v480Zm44-336h218v-28H538v28Zm0 100h218v-28H538v28Zm0 100h218v-28H538v28ZM160-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialChromeReaderModeW100.displayName = 'OnesyIconMaterialChromeReaderModeW100';

export default IconMaterialChromeReaderModeW100;
