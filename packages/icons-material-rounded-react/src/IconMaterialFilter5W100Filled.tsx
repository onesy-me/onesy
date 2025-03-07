import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter5W100Filled'

      short_name='Filter5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M568-386q26 0 43-17t17-43v-68q0-26-17-43t-43-17H468v-132h146q6 0 10-4t4-10q0-6-4-10t-10-4H470q-13 0-21.5 8.5T440-704v128q0 13 8.5 21.5T470-546h98q14 0 23 9t9 23v68q0 14-9 23t-23 9H454q-6 0-10 4t-4 10q0 6 4 10t10 4h114Zm-242 94q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Z"/>
    </Icon>
  );
});

IconMaterialFilter5W100Filled.displayName = 'OnesyIconMaterialFilter5W100Filled';

export default IconMaterialFilter5W100Filled;
