import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardOptionKey = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOptionKey'

      short_name='KeyboardOptionKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M591-200 314-680H120v-80h240l277 480h203v80H591Zm9-480v-80h240v80H600Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOptionKey.displayName = 'OnesyIconMaterialKeyboardOptionKey';

export default IconMaterialKeyboardOptionKey;
