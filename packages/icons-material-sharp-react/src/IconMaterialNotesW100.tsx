import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotesW100'

      short_name='Notes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-278v-28h376v28H172Zm0-188v-28h616v28H172Zm0-188v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialNotesW100.displayName = 'OnesyIconMaterialNotesW100';

export default IconMaterialNotesW100;
