import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStraighten = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Straighten'

      short_name='Straighten'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-480h800v480H80Zm80-80h640v-320H680v160h-80v-160h-80v160h-80v-160h-80v160h-80v-160H160v320Zm120-160h80-80Zm160 0h80-80Zm160 0h80-80Zm-120 0Z"/>
    </Icon>
  );
});

IconMaterialStraighten.displayName = 'OnesyIconMaterialStraighten';

export default IconMaterialStraighten;
