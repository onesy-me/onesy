import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNfc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Nfc'

      short_name='Nfc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280h400v-400H520q-33 0-56.5 23.5T440-600v52q-20 11-30 28t-10 40q0 33 23.5 56.5T480-400q33 0 56.5-23.5T560-480q0-23-11-40t-29-28v-52h80v240H360v-240h40v-80H280v400ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialNfc.displayName = 'OnesyIconMaterialNfc';

export default IconMaterialNfc;
