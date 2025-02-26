import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter8W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter8W100Filled'

      short_name='Filter8'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-386h68q26 0 43-17t17-43v-68q0-23-11.5-34.5T594-560q11 0 22.5-11.5T628-606v-68q0-26-17-43t-43-17h-68q-26 0-43 17t-17 43v68q0 23 11.5 34.5T474-560q-11 0-22.5 11.5T440-514v68q0 26 17 43t43 17Zm0-320h68q14 0 23 9t9 23v68q0 14-9 23t-23 9h-68q-14 0-23-9t-9-23v-68q0-14 9-23t23-9Zm0 292q-14 0-23-9t-9-23v-68q0-14 9-23t23-9h68q14 0 23 9t9 23v68q0 14-9 23t-23 9h-68ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Z"/>
    </Icon>
  );
});

IconMaterialFilter8W100Filled.displayName = 'OnesyIconMaterialFilter8W100Filled';

export default IconMaterialFilter8W100Filled;
