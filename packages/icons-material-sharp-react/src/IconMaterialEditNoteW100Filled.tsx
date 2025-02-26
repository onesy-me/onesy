import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditNoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNoteW100Filled'

      short_name='EditNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-400v-28h280v28H212Zm0-160v-28h440v28H212Zm0-160v-28h440v28H212Zm320 508v-78l231-230 77 78-230 230h-78Zm231-192 37-38-37-38-38 38 38 38Z"/>
    </Icon>
  );
});

IconMaterialEditNoteW100Filled.displayName = 'OnesyIconMaterialEditNoteW100Filled';

export default IconMaterialEditNoteW100Filled;
