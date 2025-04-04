import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedW100'

      short_name='Feed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h361q12 0 23.5 5t19.5 13l134 134q8 8 13 19.5t5 23.5v361q0 26-17 43t-43 17H232Zm0-28h496q14 0 23-9t9-23v-368H630q-13 0-21.5-8.5T600-630v-130H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9Zm408-132q6 0 10-4t4-10q0-6-4-10t-10-4H320q-6 0-10 4t-4 10q0 6 4 10t10 4h320ZM466-600q6 0 10-4t4-10q0-6-4-10t-10-4H320q-6 0-10 4t-4 10q0 6 4 10t10 4h146Zm174 134q6 0 10-4t4-10q0-6-4-10t-10-4H320q-6 0-10 4t-4 10q0 6 4 10t10 4h320ZM200-760v160-160 560-560Z"/>
    </Icon>
  );
});

IconMaterialFeedW100.displayName = 'OnesyIconMaterialFeedW100';

export default IconMaterialFeedW100;
