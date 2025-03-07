import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomain = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Domain'

      short_name='Domain'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-720h400v160h400v560H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h320v-400H480v80h80v80h-80v80h80v80h-80v80Zm160-240v-80h80v80h-80Zm0 160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialDomain.displayName = 'OnesyIconMaterialDomain';

export default IconMaterialDomain;
