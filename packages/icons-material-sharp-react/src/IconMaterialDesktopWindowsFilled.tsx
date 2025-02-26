import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopWindowsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindowsFilled'

      short_name='DesktopWindows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-80h80v-80H80v-560h800v560H560v80h80v80H320Z"/>
    </Icon>
  );
});

IconMaterialDesktopWindowsFilled.displayName = 'OnesyIconMaterialDesktopWindowsFilled';

export default IconMaterialDesktopWindowsFilled;
