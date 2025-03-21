import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvStation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvStation'

      short_name='EvStation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-560h240v-200H240v200Zm0 360h240v-280H240v280Zm-80 80v-720h400v360h120v300h90v-420h-50v-120h20v-60h40v60h40v-60h40v60h20v120h-50v480H620v-300h-60v300H160Zm320-80H240h240Zm-140 0 100-160h-60v-120L280-320h60v120Z"/>
    </Icon>
  );
});

IconMaterialEvStation.displayName = 'OnesyIconMaterialEvStation';

export default IconMaterialEvStation;
