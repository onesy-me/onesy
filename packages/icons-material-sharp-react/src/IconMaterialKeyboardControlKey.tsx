import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardControlKey = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardControlKey'

      short_name='KeyboardControlKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m256-424-56-56 280-280 280 280-56 56-224-223-224 223Z"/>
    </Icon>
  );
});

IconMaterialKeyboardControlKey.displayName = 'OnesyIconMaterialKeyboardControlKey';

export default IconMaterialKeyboardControlKey;
