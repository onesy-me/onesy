import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeNightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeNightFilled'

      short_name='ModeNight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-80q-35 0-70-7t-67-21q-11-5-18-15t-7-22q0-9 4-17t12-14q70-55 108-135t38-169q0-89-38.5-168.5T233-784q-7-6-11-14t-4-17q0-12 6.5-22t17.5-15q33-14 68-21t70-7q83 0 156 31.5T663-763q54 54 85.5 127T780-480q0 83-31.5 156T663-197q-54 54-127 85.5T380-80Z"/>
    </Icon>
  );
});

IconMaterialModeNightFilled.displayName = 'OnesyIconMaterialModeNightFilled';

export default IconMaterialModeNightFilled;
