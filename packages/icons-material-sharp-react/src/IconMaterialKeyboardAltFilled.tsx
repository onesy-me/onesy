import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAltFilled'

      short_name='KeyboardAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-680h880v680H40Zm280-160h320v-40H320v40ZM200-400h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialKeyboardAltFilled.displayName = 'OnesyIconMaterialKeyboardAltFilled';

export default IconMaterialKeyboardAltFilled;
