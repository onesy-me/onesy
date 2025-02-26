import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventNoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventNoteW100Filled'

      short_name='EventNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-426v-28h348v28H306Zm0 160v-28h228v28H306ZM172-132v-616h140v-92h32v92h276v-92h28v92h140v616H172Zm28-28h560v-368H200v368Z"/>
    </Icon>
  );
});

IconMaterialEventNoteW100Filled.displayName = 'OnesyIconMaterialEventNoteW100Filled';

export default IconMaterialEventNoteW100Filled;
