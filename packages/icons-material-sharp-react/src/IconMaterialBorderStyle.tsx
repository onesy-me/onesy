import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderStyle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderStyle'

      short_name='BorderStyle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM120-120v-720h720v80H200v640h-80Z"/>
    </Icon>
  );
});

IconMaterialBorderStyle.displayName = 'OnesyIconMaterialBorderStyle';

export default IconMaterialBorderStyle;
