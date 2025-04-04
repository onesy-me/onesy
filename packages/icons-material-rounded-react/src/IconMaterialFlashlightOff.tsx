import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashlightOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOff'

      short_name='FlashlightOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M764-84 640-208v48q0 33-23.5 56.5T560-80H400q-33 0-56.5-23.5T320-160v-368L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11Zm-364-76h160v-128L400-448v288Zm320-640v136q0 12-3 23t-10 21l-74 113q-11 17-26.5 18t-28.5-7q-13-8-17.5-23t6.5-32l73-113v-16H410q-17 0-28-11.5T371-720q0-17 11.5-28.5T411-760h229v-40H289q-17 0-28-11.5T250-840q0-17 11.5-28.5T290-880h350q33 0 56.5 23.5T720-800ZM480-368Zm-70-312Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOff.displayName = 'OnesyIconMaterialFlashlightOff';

export default IconMaterialFlashlightOff;
