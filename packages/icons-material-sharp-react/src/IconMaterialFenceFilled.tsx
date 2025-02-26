import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFenceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FenceFilled'

      short_name='Fence'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v-160h-80v-80h80v-80h-80v-80h80v-120l120-120 80 80 81-80 80 80 80-80 120 120v120h79v80h-79v80h79v80h-79v160H200Zm80-400h80v-87l-40-40-40 40v87Zm160 0h80v-87l-40-40-40 40v87Zm161 0h79v-87l-40-40-39 39v88ZM280-400h80v-80h-80v80Zm160 0h80v-80h-80v80Zm161 0h79v-80h-79v80ZM280-240h80v-80h-80v80Zm160 0h80v-80h-80v80Zm161 0h79v-80h-79v80Z"/>
    </Icon>
  );
});

IconMaterialFenceFilled.displayName = 'OnesyIconMaterialFenceFilled';

export default IconMaterialFenceFilled;
