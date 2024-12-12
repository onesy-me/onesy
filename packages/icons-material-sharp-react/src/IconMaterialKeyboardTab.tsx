import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardTab = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTab'

      short_name='KeyboardTab'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-240v-480h80v480h-80Zm-320 0-57-56 144-144H80v-80h487L424-664l56-56 240 240-240 240Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTab.displayName = 'OnesyIconMaterialKeyboardTab';

export default IconMaterialKeyboardTab;
