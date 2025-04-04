import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactPageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPageFilled'

      short_name='ContactPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-54-17t-57-6q-29 0-57 6t-54 17q-23 10-36 30t-13 44v23ZM800-80H160v-800h400l240 240v560Z"/>
    </Icon>
  );
});

IconMaterialContactPageFilled.displayName = 'OnesyIconMaterialContactPageFilled';

export default IconMaterialContactPageFilled;
