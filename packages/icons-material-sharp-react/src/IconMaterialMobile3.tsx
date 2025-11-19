import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobile3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mobile3'

      short_name='Mobile3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160h240v-80H360v80ZM200-40v-880h560v204h40v192h-40v484H200Zm80-80h400v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
});

IconMaterialMobile3.displayName = 'OnesyIconMaterialMobile3';

export default IconMaterialMobile3;
