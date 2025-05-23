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
      <path d="m192-788 28 28h-28q-12 0-22 10t-10 22v376q0 14 9 23t23 9h428L94-846q-4-4-4.5-9.5T94-866q5-5 10-5t10 5l714 714q4 4 4.5 9.5T828-132q-5 5-10 5t-10-5L648-292H508v80h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H386q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-80H192q-26 0-43-17t-17-43v-376q0-26 17-43t43-17Zm636 60v379q0 7-4.32 10.5t-9.5 3.5q-5.18 0-9.68-3.59-4.5-3.58-4.5-10.41v-379q0-14-9-23t-23-9H368q-7 0-10.5-4.32t-3.5-9.5q0-5.18 3.5-9.68T368-788h400q26 0 43 17t17 43ZM567-527Zm-166-12Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabledW100.displayName = 'OnesyIconMaterialDesktopAccessDisabledW100';

export default IconMaterialDesktopAccessDisabledW100;
