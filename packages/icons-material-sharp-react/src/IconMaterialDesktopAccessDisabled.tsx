import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopAccessDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabled'

      short_name='DesktopAccessDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-593h47l73 73h-40v440h368L28-820l56-56L876-84l-56 56-212-212h-48v80h80v80H320v-80h80v-80H80Zm748-6-74-74h46v-440H314l-80-80h646v594h-52ZM308-540Zm226 0Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabled.displayName = 'OnesyIconMaterialDesktopAccessDisabled';

export default IconMaterialDesktopAccessDisabled;
