import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabled'

      short_name='PrintDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-55-71-71v6H240v-160H80v-360h126L55-791l57-57 736 736-57 57ZM320-200h320v-6L486-360H320v160Zm474-80-80-80h86v-200H514l-80-80h446v360h-86Zm-634-80h80v-80h166L286-560H160v200Zm480-280v-120H314l-80-80h486v200h-80Zm80 180q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460ZM160-560h126-126Zm640 0H514h286Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabled.displayName = 'OnesyIconMaterialPrintDisabled';

export default IconMaterialPrintDisabled;
