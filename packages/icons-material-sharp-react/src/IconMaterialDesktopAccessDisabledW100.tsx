import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopAccessDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabledW100'

      short_name='DesktopAccessDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-292v-496h60l28 28h-60v440h460L84-856l20-20 734 734-20 20-170-170H508v80h80v28H372v-28h80v-80H132Zm663-6-22-22h27v-440H333l-28-28h523v490h-33ZM400-540Zm153 0Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabledW100.displayName = 'OnesyIconMaterialDesktopAccessDisabledW100';

export default IconMaterialDesktopAccessDisabledW100;
