import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolunteerActivismFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolunteerActivismFilled'

      short_name='VolunteerActivism'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-80h160v-440H40v440Zm520 0 320-120v-80H520l-84-30 14-37 70 27h160v-80L359-520h-79v361l280 79Zm80-360L474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Z"/>
    </Icon>
  );
});

IconMaterialVolunteerActivismFilled.displayName = 'OnesyIconMaterialVolunteerActivismFilled';

export default IconMaterialVolunteerActivismFilled;
