import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOff'

      short_name='KeyboardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-59 59-794l57-57 735 735-57 57ZM320-320v-80h247l80 80H320ZM200-440v-80h80v80h-80Zm120 0v-80h80v80h-80Zm360 0v-80h80v80h-80ZM200-560v-80h80v80h-80Zm360 0v-80h80v80h-80Zm120 0v-80h80v80h-80Zm120 280v-400H401l-80-80h559v561l-80-81ZM80-200v-560h127l80 80H160v400h527l80 80H80Zm361-440h79v79l-79-79Zm119 120h80v79l-80-79Zm-187 40Zm227 0Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOff.displayName = 'OnesyIconMaterialKeyboardOff';

export default IconMaterialKeyboardOff;
