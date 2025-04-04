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
      <path d="M192-788v40l-98-98q-4-4-4.5-9.5T94-866q5-5 10-5t10 5l714 714q4 4 4.5 9.5T828-132q-5 5-10 5t-10-5L648-292H508v80h66q6 0 10 4t4 10q0 6-4 10t-10 4H386q-6 0-10-4t-4-10q0-6 4-10t10-4h66v-80H192q-26 0-43-17t-17-43v-376q0-26 17-43t43-17Zm636 60v391q0 10-5.5 17T809-310q-8 3-16.5 2t-15.5-8L356-737q-7-7-8-15.5t2-16.5q3-8 10-13.5t17-5.5h391q26 0 43 17t17 43Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabledW100Filled.displayName = 'OnesyIconMaterialDesktopAccessDisabledW100Filled';

export default IconMaterialDesktopAccessDisabledW100Filled;
