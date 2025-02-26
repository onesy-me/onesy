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
      <path d="M640-280q17 0 28.5-11.5T680-320v-320q0-17-11.5-28.5T640-680H520q-33 0-56.5 23.5T440-600v52q-20 11-30 28t-10 40q0 33 23.5 56.5T480-400q33 0 56.5-23.5T560-480q0-23-11-40t-29-28v-52h80v240H360v-240q17 0 28.5-11.5T400-640q0-17-11.5-28.5T360-680h-40q-17 0-28.5 11.5T280-640v320q0 17 11.5 28.5T320-280h320ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialNfc.displayName = 'OnesyIconMaterialNfc';

export default IconMaterialNfc;
