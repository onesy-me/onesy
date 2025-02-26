import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderHorizontal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderHorizontal'

      short_name='BorderHorizontal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h720v80H120Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialBorderHorizontal.displayName = 'OnesyIconMaterialBorderHorizontal';

export default IconMaterialBorderHorizontal;
