import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopWindowsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindowsW100'

      short_name='DesktopWindows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-172v-28h80v-80H132v-508h696v508H508v80h80v28H372ZM160-308h640v-452H160v452Zm0 0v-452 452Z"/>
    </Icon>
  );
});

IconMaterialDesktopWindowsW100.displayName = 'OnesyIconMaterialDesktopWindowsW100';

export default IconMaterialDesktopWindowsW100;
