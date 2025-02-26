import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchAccessShortcutAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessShortcutAdd'

      short_name='SwitchAccessShortcutAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM600-80q-127-48-203.5-158T320-484q0-91 36-172.5T458-800H320v-80h280v280h-80v-148q-57 51-88.5 119.5T400-484q0 102 54 187.5T600-167v87Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessShortcutAdd.displayName = 'OnesyIconMaterialSwitchAccessShortcutAdd';

export default IconMaterialSwitchAccessShortcutAdd;
