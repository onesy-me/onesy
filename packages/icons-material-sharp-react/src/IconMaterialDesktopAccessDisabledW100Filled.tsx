import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopAccessDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabledW100Filled'

      short_name='DesktopAccessDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M818-122 648-292H508v80h80v28H372v-28h80v-80H132v-496h60v40L84-856l20-20 734 734-20 20Zm-23-176L305-788h523v490h-33Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabledW100Filled.displayName = 'OnesyIconMaterialDesktopAccessDisabledW100Filled';

export default IconMaterialDesktopAccessDisabledW100Filled;
