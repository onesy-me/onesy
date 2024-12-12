import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaddingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaddingW100'

      short_name='Padding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M298-606h56v-56h-56v56Zm154 0h56v-56h-56v56Zm154 0h56v-56h-56v56ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialPaddingW100.displayName = 'OnesyIconMaterialPaddingW100';

export default IconMaterialPaddingW100;
