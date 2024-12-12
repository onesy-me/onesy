import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerW100'

      short_name='Power'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M448-200h64v-86l128-128v-186H320v186l128 128v86Zm-28 28v-102L292-402v-226h98v-160h28v160h124v-160h28v160h98v226L540-274v102H420Zm60-228Z"/>
    </Icon>
  );
});

IconMaterialPowerW100.displayName = 'OnesyIconMaterialPowerW100';

export default IconMaterialPowerW100;
