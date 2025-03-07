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
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v74q0 6-4 10t-10 4q-6 0-10-4t-4-10v-84L497-497q-4 2-8 3.5t-9 1.5q-5 0-9-1.5t-8-3.5L160-698v426q0 14 9 23t23 9h414q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm288-308 304-200H176l304 200ZM160-240v-458 8-25 1-6 7-2.5 25.5-8 458Zm574 28q-14 0-24-10t-10-24v-120q0-14 11.5-24t28.5-10v-46q0-31 21.5-52.5T814-520q31 0 52.5 21.5T888-446v46q17 0 28.5 10t11.5 24v120q0 14-10 24t-24 10H734Zm34-188h92v-46q0-19-13.5-32.5T814-492q-19 0-32.5 13.5T768-446v46Z"/>
    </Icon>
  );
});

IconMaterialMailLockW100.displayName = 'OnesyIconMaterialMailLockW100';

export default IconMaterialMailLockW100;
