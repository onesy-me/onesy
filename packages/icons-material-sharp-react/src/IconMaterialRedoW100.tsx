import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRedoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedoW100'

      short_name='Redo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M367-252q-73 0-124.5-52T191-429q0-73 51.5-124.5T367-605h327L571-728l20-20 157 157-157 157-20-20 123-123H367q-62 0-105 43t-43 105q0 62 43 105.5T367-280h292v28H367Z"/>
    </Icon>
  );
});

IconMaterialRedoW100.displayName = 'OnesyIconMaterialRedoW100';

export default IconMaterialRedoW100;
