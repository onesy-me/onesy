import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrayerTimesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrayerTimesFilled'

      short_name='PrayerTimes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm41-472 59-43 58 43-23-68 59-43h-72l-22-69-22 69h-73l59 43-23 68Zm-41 220q83 0 141.5-58T680-480q0-8-.5-16t-2.5-16q-11 47-49 77.5T539-404q-60 0-101-41t-41-101q0-46 26-82.5t68-51.5h-11q-84 0-142 58.5T280-480q0 84 58 142t142 58Z"/>
    </Icon>
  );
});

IconMaterialPrayerTimesFilled.displayName = 'OnesyIconMaterialPrayerTimesFilled';

export default IconMaterialPrayerTimesFilled;
