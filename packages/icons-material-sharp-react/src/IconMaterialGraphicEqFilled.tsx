import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGraphicEqFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GraphicEqFilled'

      short_name='GraphicEq'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240v-480h80v480h-80ZM440-80v-800h80v800h-80ZM120-400v-160h80v160h-80Zm480 160v-480h80v480h-80Zm160-160v-160h80v160h-80Z"/>
    </Icon>
  );
});

IconMaterialGraphicEqFilled.displayName = 'OnesyIconMaterialGraphicEqFilled';

export default IconMaterialGraphicEqFilled;
