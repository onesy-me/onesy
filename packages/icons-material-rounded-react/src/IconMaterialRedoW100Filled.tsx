import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRedoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedoW100Filled'

      short_name='Redo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-577H367q-62 0-105 43t-43 105q0 62 43 105.5T367-280h278q6 0 10 4t4 10q0 6-4 10t-10 4H367q-73 0-124.5-52T191-429q0-73 51.5-124.5T367-605h327L581-718q-4-4-4.5-9.5T581-738q5-5 10-5t10 5l126 126q5 5 7 10t2 11q0 6-2 11t-7 10L601-444q-4 4-9.5 4.5T581-444q-5-5-5-10t5-10l113-113Z"/>
    </Icon>
  );
});

IconMaterialRedoW100Filled.displayName = 'OnesyIconMaterialRedoW100Filled';

export default IconMaterialRedoW100Filled;
