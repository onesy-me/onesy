import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarlyOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarlyOnFilled'

      short_name='EarlyOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-30-280v-80h60v80h-60Zm0 400v-80h60V0h-60Zm165-333-43-42 57-57 42 43-56 56ZM531-49l-42-42 57-57 42 42-57 57Zm309-161v-60h80v60h-80Zm-400 0v-60h80v60h-80ZM829-49l-56-57 42-42 57 56-43 43ZM545-332l-56-57 42-42 57 56-43 43ZM120-80v-720h120v-80h80v80h320v-80h80v80h120v240H200v400h160v80H120Z"/>
    </Icon>
  );
});

IconMaterialEarlyOnFilled.displayName = 'OnesyIconMaterialEarlyOnFilled';

export default IconMaterialEarlyOnFilled;
