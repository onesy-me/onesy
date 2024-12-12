import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettopComponentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettopComponentW100Filled'

      short_name='SettopComponent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-332v-296h696v296H132Zm94-134h184v-28H226v28Zm304 16h60v-60h-60v60Zm120 0h60v-60h-60v60Z"/>
    </Icon>
  );
});

IconMaterialSettopComponentW100Filled.displayName = 'OnesyIconMaterialSettopComponentW100Filled';

export default IconMaterialSettopComponentW100Filled;
