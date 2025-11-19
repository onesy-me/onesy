import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileInfo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileInfo'

      short_name='MobileInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-300h80v-220h-80v220Zm40-300q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600ZM200-40v-880h560v204h40v192h-40v484H200Zm80-80h400v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
});

IconMaterialMobileInfo.displayName = 'OnesyIconMaterialMobileInfo';

export default IconMaterialMobileInfo;
