import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthWide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthWide'

      short_name='WidthWide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h80v-480h-80v480Zm160 0h320v-480H320v480Zm400 0h80v-480h-80v480ZM320-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialWidthWide.displayName = 'OnesyIconMaterialWidthWide';

export default IconMaterialWidthWide;
