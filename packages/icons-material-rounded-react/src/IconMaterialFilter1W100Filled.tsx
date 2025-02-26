import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1W100Filled'

      short_name='Filter1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-706v306q0 6 4 10t10 4q6 0 10-4t4-10v-304q0-13-8.5-21.5T558-734h-64q-6 0-10 4t-4 10q0 6 4 10t10 4h66ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Z"/>
    </Icon>
  );
});

IconMaterialFilter1W100Filled.displayName = 'OnesyIconMaterialFilter1W100Filled';

export default IconMaterialFilter1W100Filled;
