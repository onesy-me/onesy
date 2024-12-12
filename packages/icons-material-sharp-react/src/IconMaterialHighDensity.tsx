import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighDensity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighDensity'

      short_name='HighDensity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-560h560v560H120Zm80-80h400v-400H200v400Zm-80 240v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM400-560Z"/>
    </Icon>
  );
});

IconMaterialHighDensity.displayName = 'OnesyIconMaterialHighDensity';

export default IconMaterialHighDensity;
