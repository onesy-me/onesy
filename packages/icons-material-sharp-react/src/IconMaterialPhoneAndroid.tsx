import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneAndroid = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroid'

      short_name='PhoneAndroid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-160h160v-40H400v40ZM200-40v-880h560v880H200Zm80-200v120h400v-120H280Zm0-80h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroid.displayName = 'OnesyIconMaterialPhoneAndroid';

export default IconMaterialPhoneAndroid;
