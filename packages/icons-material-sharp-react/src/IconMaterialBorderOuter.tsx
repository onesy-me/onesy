import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderOuter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderOuter'

      short_name='BorderOuter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h560v-560H200v560Zm-80 80v-720h720v720H120Zm160-320v-80h80v80h-80Zm160 160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialBorderOuter.displayName = 'OnesyIconMaterialBorderOuter';

export default IconMaterialBorderOuter;
