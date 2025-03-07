import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInstallMobile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallMobile'

      short_name='InstallMobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="1" opacity=".3" width="10" x="7" y="20"/><rect height="1" opacity=".3" width="7" x="7" y="3"/><path d="M17,18H7V6h7V4H7V3h7V1.01L7,1C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2v-5h-2V18z M17,21H7v-1h10V21z"/><polygon points="19,3 17,3 17,10.17 14.41,7.59 14,8 13,9 14,10 18,14 21,11 23,9 21.59,7.59 21,8.18 19,10.17"/></g></g>
    </Icon>
  );
});

IconMaterialInstallMobile.displayName = 'OnesyIconMaterialInstallMobile';

export default IconMaterialInstallMobile;
