import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeNight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeNight'

      short_name='ModeNight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-160q133 0 226.5-93.5T700-480q0-133-93.5-226.5T380-800h-21q-10 0-19 2 57 66 88.5 147.5T460-480q0 89-31.5 170.5T340-162q9 2 19 2h21Zm0 80q-35 0-70-7t-67-21q-11-5-18-15t-7-22q0-9 4-17t12-14q70-55 108-135t38-169q0-89-38.5-168.5T233-784q-7-6-11-14t-4-17q0-12 6.5-22t17.5-15q33-14 68-21t70-7q83 0 156 31.5T663-763q54 54 85.5 127T780-480q0 83-31.5 156T663-197q-54 54-127 85.5T380-80Zm80-400Z"/>
    </Icon>
  );
});

IconMaterialModeNight.displayName = 'OnesyIconMaterialModeNight';

export default IconMaterialModeNight;
