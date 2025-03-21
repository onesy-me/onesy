import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideocamW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamW100'

      short_name='Videocam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M217-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v188l84-84q7-7 16.5-3.5T803-574v188q0 10-9.5 13.5T777-376l-84-84v188q0 26-17 43t-43 17H217Zm0-28h416q14 0 23-9t9-23v-416q0-14-9-23t-23-9H217q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialVideocamW100.displayName = 'OnesyIconMaterialVideocamW100';

export default IconMaterialVideocamW100;
