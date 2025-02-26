import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardFull'

      short_name='KeyboardFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-240h640v-320H160v320Z"/>
    </Icon>
  );
});

IconMaterialKeyboardFull.displayName = 'OnesyIconMaterialKeyboardFull';

export default IconMaterialKeyboardFull;
