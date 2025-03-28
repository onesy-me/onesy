import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenW100'

      short_name='DoorOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-452q12 0 20-8.5t8-19.5q0-12-8-20t-20-8q-11 0-19.5 8t-8.5 20q0 11 8.5 19.5T440-452ZM280-172v-28l292-24v-542l-260-20v-28l288 22v594l-320 26Zm-84 0v-28h56v-614h456v614h56v28H196Zm84-28h400v-586H280v586Z"/>
    </Icon>
  );
});

IconMaterialDoorOpenW100.displayName = 'OnesyIconMaterialDoorOpenW100';

export default IconMaterialDoorOpenW100;
