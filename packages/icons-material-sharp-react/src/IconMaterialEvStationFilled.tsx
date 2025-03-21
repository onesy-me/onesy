import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvStationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvStationFilled'

      short_name='EvStation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-560h240v-200H240v200Zm-80 440v-720h400v360h120v300h90v-420h-50v-120h20v-60h40v60h40v-60h40v60h20v120h-50v480H620v-300h-60v300H160Zm180-80 100-160h-60v-120L280-320h60v120Z"/>
    </Icon>
  );
});

IconMaterialEvStationFilled.displayName = 'OnesyIconMaterialEvStationFilled';

export default IconMaterialEvStationFilled;
