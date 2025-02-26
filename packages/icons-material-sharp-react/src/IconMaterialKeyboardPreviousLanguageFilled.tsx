import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardPreviousLanguageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardPreviousLanguageFilled'

      short_name='KeyboardPreviousLanguage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-560h800v560H80Zm240-120h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM240-720v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z"/>
    </Icon>
  );
});

IconMaterialKeyboardPreviousLanguageFilled.displayName = 'OnesyIconMaterialKeyboardPreviousLanguageFilled';

export default IconMaterialKeyboardPreviousLanguageFilled;
