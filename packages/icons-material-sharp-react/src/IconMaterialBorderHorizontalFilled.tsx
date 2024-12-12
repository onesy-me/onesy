import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderHorizontalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderHorizontalFilled'

      short_name='BorderHorizontal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h720v80H120Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialBorderHorizontalFilled.displayName = 'OnesyIconMaterialBorderHorizontalFilled';

export default IconMaterialBorderHorizontalFilled;
