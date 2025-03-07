import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4W100Filled'

      short_name='Filter4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-546v146q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-320q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v146H468v-146q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v144q0 12.75 8.63 21.37Q457.25-546 470-546h130ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v430q0 12 10 22t22 10h430q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H218Z"/>
    </Icon>
  );
});

IconMaterialFilter4W100Filled.displayName = 'OnesyIconMaterialFilter4W100Filled';

export default IconMaterialFilter4W100Filled;
