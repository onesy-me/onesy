import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkLock'

      short_name='PhonelinkLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M634-320q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T720-640q33 0 56.5 23.5T800-560v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H634Zm46-200h80v-40q0-17-11.5-28.5T720-600q-17 0-28.5 11.5T680-560v40ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v120q0 17-11.5 28.5T720-680q-17 0-28.5-11.5T680-720H280v480h400q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240v120q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-640h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkLock.displayName = 'OnesyIconMaterialPhonelinkLock';

export default IconMaterialPhonelinkLock;
