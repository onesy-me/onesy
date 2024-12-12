import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderRight'

      short_name='BorderRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-720h80v720h-80Z"/>
    </Icon>
  );
});

IconMaterialBorderRight.displayName = 'OnesyIconMaterialBorderRight';

export default IconMaterialBorderRight;
