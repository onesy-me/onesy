import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditNoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNoteW100'

      short_name='EditNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-400v-28h280v28H212Zm0-160v-28h440v28H212Zm0-160v-28h440v28H212Zm320 508v-78l231-230 77 78-230 230h-78Zm268-230-37-38 37 38ZM560-240h38l144-144-19-19-18-20-145 145v38Zm163-163-18-20 37 39-19-19Z"/>
    </Icon>
  );
});

IconMaterialEditNoteW100.displayName = 'OnesyIconMaterialEditNoteW100';

export default IconMaterialEditNoteW100;
