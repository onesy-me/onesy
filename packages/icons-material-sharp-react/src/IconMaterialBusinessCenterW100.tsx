import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusinessCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterW100'

      short_name='BusinessCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-496h240v-108h216v108h240v496H132Zm268-496h160v-80H400v80Zm400 282H548v54H412v-54H160v186h640v-186Zm-360 26h80v-80h-80v80Zm-280-54h252v-54h136v54h252v-226H160v226Zm320 14Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterW100.displayName = 'OnesyIconMaterialBusinessCenterW100';

export default IconMaterialBusinessCenterW100;
