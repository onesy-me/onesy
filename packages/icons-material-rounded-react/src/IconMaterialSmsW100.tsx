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
      <path d="M320-532q11 0 19.5-8.5T348-560q0-11-8.5-19.5T320-588q-11 0-19.5 8.5T292-560q0 11 8.5 19.5T320-532Zm160 0q11 0 19.5-8.5T508-560q0-11-8.5-19.5T480-588q-11 0-19.5 8.5T452-560q0 11 8.5 19.5T480-532Zm160 0q11 0 19.5-8.5T668-560q0-11-8.5-19.5T640-588q-11 0-19.5 8.5T612-560q0 11 8.5 19.5T640-532ZM244-292l-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm-12-28h536q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialSmsW100.displayName = 'OnesyIconMaterialSmsW100';

export default IconMaterialSmsW100;
