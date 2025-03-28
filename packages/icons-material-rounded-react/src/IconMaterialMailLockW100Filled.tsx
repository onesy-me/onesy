import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMailLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailLockW100Filled'

      short_name='MailLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-520 187-713q-5-3-10.5-2t-8.5 6q-4 5-2.5 10.5t6.5 8.5l291 193q8.13 5 17.06 5 8.94 0 16.94-5l291-193q5-3 6.5-9t-2.5-11q-3-5-8.5-5.5T773-713L480-520Zm254 308q-14.45 0-24.22-9.77Q700-231.55 700-246v-120q0-15 12-24.5t28-9.5v-46q0-30.52 21.74-52.26Q783.47-520 814-520q30.53 0 52.26 21.74Q888-476.52 888-446v46q16 0 28 9.5t12 24.5v120q0 14.45-9.78 24.23Q908.45-212 894-212H734Zm34-188h92v-45.61q0-19.39-13.5-32.89T814-492q-19 0-32.5 13.5T768-445.61V-400ZM192-212q-24.75 0-42.37-17.63Q132-247.25 132-272v-416q0-24.75 17.63-42.38Q167.25-748 192-748h576q24.75 0 42.38 17.62Q828-712.75 828-688v74q0 5.95-4.03 9.97Q819.95-600 814-600q-80.51 0-137.26 58.5Q620-483 620-400.68V-242q0 12.75-8.62 21.37Q602.75-212 590-212H192Z"/>
    </Icon>
  );
});

IconMaterialMailLockW100Filled.displayName = 'OnesyIconMaterialMailLockW100Filled';

export default IconMaterialMailLockW100Filled;
