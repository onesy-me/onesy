import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInstallMobileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallMobileFilled'

      short_name='InstallMobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-880h360v200H280v480h400v-80h80v280H200Zm520-360L520-600l56-56 104 104v-288h80v288l104-104 56 56-200 200Z"/>
    </Icon>
  );
});

IconMaterialInstallMobileFilled.displayName = 'OnesyIconMaterialInstallMobileFilled';

export default IconMaterialInstallMobileFilled;
