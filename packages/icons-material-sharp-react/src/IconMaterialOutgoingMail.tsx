import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutgoingMail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutgoingMail'

      short_name='OutgoingMail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-160-56-56 63-64H560v-80h167l-63-64 56-56 160 160-160 160ZM160-280q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h520q33 0 56.5 23.5T760-760v204q-10-2-20-3t-20-1q-10 0-20 .5t-20 2.5v-147L416-520 160-703v343h323q-2 10-2.5 20t-.5 20q0 10 1 20t3 20H160Zm58-480 198 142 204-142H218Zm-58 400v-400 400Z"/>
    </Icon>
  );
});

IconMaterialOutgoingMail.displayName = 'OnesyIconMaterialOutgoingMail';

export default IconMaterialOutgoingMail;
