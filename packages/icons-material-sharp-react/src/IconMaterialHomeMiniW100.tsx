import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeMiniW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMiniW100'

      short_name='HomeMini'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-252q-95 0-161.5-66.5T132-480.12q0-31.16 16-70.52t56.06-74.52q40.06-35.16 107.11-59Q378.23-708 480.11-708q101.89 0 168.87 23.84 66.99 23.84 107 59Q796-590 812-550.64t16 70.52q0 95.12-66.5 161.62T600-252H360Zm6-28h228q71 0 130.5-43T798-452H162q14 86 73.5 129T366-280Zm114-172Zm0-14Zm-320-14h640q0-30-16-65t-53.5-65q-37.5-30-99-50T480-680q-90 0-151 20t-98.5 50q-37.5 30-54 65T160-480Zm320 0Z"/>
    </Icon>
  );
});

IconMaterialHomeMiniW100.displayName = 'OnesyIconMaterialHomeMiniW100';

export default IconMaterialHomeMiniW100;
