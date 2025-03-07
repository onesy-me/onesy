import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMailLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailLockW100'

      short_name='MailLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v148h-28v-98L480-486 160-698v426q0 14 9 23t23 9h428v28H132Zm348-308 304-200H176l304 200ZM160-240v-480 480Zm540 28v-188h40v-46q0-30.52 21.74-52.26Q783.47-520 814-520q30.53 0 52.26 21.74Q888-476.52 888-446v46h40v188H700Zm68-188h92v-45.61q0-19.39-13.5-32.89T814-492q-19 0-32.5 13.5T768-445.61V-400Z"/>
    </Icon>
  );
});

IconMaterialMailLockW100.displayName = 'OnesyIconMaterialMailLockW100';

export default IconMaterialMailLockW100;
