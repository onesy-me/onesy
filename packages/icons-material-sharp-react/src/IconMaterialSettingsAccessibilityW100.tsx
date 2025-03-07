import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsAccessibilityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAccessibilityW100'

      short_name='SettingsAccessibility'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-810q-27 0-45.5-18.5T416-874q0-27 18.5-45.5T480-938q27 0 45.5 18.5T544-874q0 27-18.5 45.5T480-810Zm-78 604v-504q-63-5-121-13.5T172-744l6-28q75 18 148.5 26t153.5 8q80 0 153.5-8T782-772l6 28q-51 12-109 20.5T558-710v504h-28v-242H430v242h-28ZM320-12q-11 0-19.5-8.5T292-40q0-11 8.5-19.5T320-68q11 0 19.5 8.5T348-40q0 11-8.5 19.5T320-12Zm160 0q-11 0-19.5-8.5T452-40q0-11 8.5-19.5T480-68q11 0 19.5 8.5T508-40q0 11-8.5 19.5T480-12Zm160 0q-11 0-19.5-8.5T612-40q0-11 8.5-19.5T640-68q11 0 19.5 8.5T668-40q0 11-8.5 19.5T640-12Z"/>
    </Icon>
  );
});

IconMaterialSettingsAccessibilityW100.displayName = 'OnesyIconMaterialSettingsAccessibilityW100';

export default IconMaterialSettingsAccessibilityW100;
