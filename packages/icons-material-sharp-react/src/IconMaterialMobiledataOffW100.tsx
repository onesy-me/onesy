import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobiledataOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobiledataOffW100'

      short_name='MobiledataOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M786-134 374-546v320l90-90 20 20-124 124-124-124 20-20 90 90v-348L132-788l20-20 654 654-20 20ZM614-460l-28-28v-246l-90 90-20-20 124-124 124 124-20 20-90-90v274Z"/>
    </Icon>
  );
});

IconMaterialMobiledataOffW100.displayName = 'OnesyIconMaterialMobiledataOffW100';

export default IconMaterialMobiledataOffW100;
