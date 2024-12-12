import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAlt'

      short_name='KeyboardAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-680h880v680H40Zm80-80h720v-520H120v520Zm200-80h320v-40H320v40ZM200-400h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM120-200v-520 520Z"/>
    </Icon>
  );
});

IconMaterialKeyboardAlt.displayName = 'OnesyIconMaterialKeyboardAlt';

export default IconMaterialKeyboardAlt;
