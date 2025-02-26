import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventNote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventNote'

      short_name='EventNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400v-80h400v80H280Zm0 160v-80h280v80H280ZM120-80v-720h120v-80h80v80h320v-80h80v80h120v720H120Zm80-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialEventNote.displayName = 'OnesyIconMaterialEventNote';

export default IconMaterialEventNote;
