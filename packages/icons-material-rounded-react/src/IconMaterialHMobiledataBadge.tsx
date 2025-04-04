import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataBadge'

      short_name='HMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm200 320h160v120q0 17 11.5 28.5T600-280q17 0 28.5-11.5T640-320v-320q0-17-11.5-28.5T600-680q-17 0-28.5 11.5T560-640v120H400v-120q0-17-11.5-28.5T360-680q-17 0-28.5 11.5T320-640v320q0 17 11.5 28.5T360-280q17 0 28.5-11.5T400-320v-120Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataBadge.displayName = 'OnesyIconMaterialHMobiledataBadge';

export default IconMaterialHMobiledataBadge;
