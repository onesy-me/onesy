import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsW100'

      short_name='Sms'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-532q11 0 19.5-8.5T348-560q0-11-8.5-19.5T320-588q-11 0-19.5 8.5T292-560q0 11 8.5 19.5T320-532Zm160 0q11 0 19.5-8.5T508-560q0-11-8.5-19.5T480-588q-11 0-19.5 8.5T452-560q0 11 8.5 19.5T480-532Zm160 0q11 0 19.5-8.5T668-560q0-11-8.5-19.5T640-588q-11 0-19.5 8.5T612-560q0 11 8.5 19.5T640-532ZM132-180v-648h696v536H244L132-180Zm100-140h568v-480H160v552l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialSmsW100.displayName = 'OnesyIconMaterialSmsW100';

export default IconMaterialSmsW100;
