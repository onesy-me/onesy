import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorsOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsOffW100'

      short_name='SensorsOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-126 349-571q-14 20-21.5 42.5T320-480q0 33 12.5 62t34.5 51l-20 20q-26-26-40.5-60T292-480q0-32 10-60t27-51l-94-94q-35 42-55 94t-20 111q0 67 25 125t69 101l-20 20q-48-48-75-111t-27-135q0-65 22-122t61-103l-89-89 20-20 668 668-20 20Zm-19-171-20-20q22-36 33.5-77t11.5-86q0-66-25-124t-69-102l20-20q48 48 75 111t27 135q0 51-13.5 97T775-297ZM657-415l-23-23q3-10 4.5-20.5T640-480q0-33-12.5-62T593-593l20-20q26 26 40.5 60t14.5 73q0 17-3 33t-8 32Z"/>
    </Icon>
  );
});

IconMaterialSensorsOffW100.displayName = 'OnesyIconMaterialSensorsOffW100';

export default IconMaterialSensorsOffW100;
