import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsAccessibilityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAccessibilityW100Filled'

      short_name='SettingsAccessibility'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-810q-27 0-45.5-18.5T416-874q0-27 18.5-45.5T480-938q27 0 45.5 18.5T544-874q0 27-18.5 45.5T480-810Zm-78 590v-490q-58-5-111.5-12T189-740q-7-2-11.5-7t-2.5-11q2-7 8-9.5t13-.5q71 16 140 23t144 7q75 0 144-7t140-23q7-2 13 .5t8 9.5q2 6-2.5 11t-11.5 7q-48 11-101.5 18T558-710v490q0 6-4 10t-10 4q-6 0-10-4t-4-10v-228H430v228q0 6-4 10t-10 4q-6 0-10-4t-4-10ZM320-12q-11 0-19.5-8.5T292-40q0-11 8.5-19.5T320-68q11 0 19.5 8.5T348-40q0 11-8.5 19.5T320-12Zm160 0q-11 0-19.5-8.5T452-40q0-11 8.5-19.5T480-68q11 0 19.5 8.5T508-40q0 11-8.5 19.5T480-12Zm160 0q-11 0-19.5-8.5T612-40q0-11 8.5-19.5T640-68q11 0 19.5 8.5T668-40q0 11-8.5 19.5T640-12Z"/>
    </Icon>
  );
});

IconMaterialSettingsAccessibilityW100Filled.displayName = 'OnesyIconMaterialSettingsAccessibilityW100Filled';

export default IconMaterialSettingsAccessibilityW100Filled;
