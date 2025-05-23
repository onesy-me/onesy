import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashlightOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOffFilled'

      short_name='FlashlightOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-160v-368L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L640-208v48q0 33-23.5 56.5T560-80H400q-33 0-56.5-23.5T320-160Zm27-600q-16 0-30.5-6T291-783l-21-21q-20-20-4-48t54-28h320q33 0 56.5 23.5T720-800q0 17-11.5 28.5T680-760H347Zm224 257L445-629q-14-14-6.5-32.5T466-680h213q24 0 33 20t-5 40l-74 111q-11 16-29.5 18T571-503Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOffFilled.displayName = 'OnesyIconMaterialFlashlightOffFilled';

export default IconMaterialFlashlightOffFilled;
