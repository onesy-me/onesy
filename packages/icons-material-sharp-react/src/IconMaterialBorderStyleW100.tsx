import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderStyleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderStyleW100'

      short_name='BorderStyle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M316-172v-40h40v40h-40Zm144 0v-40h40v40h-40Zm144 0v-40h40v40h-40Zm144 0v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40ZM172-172v-616h616v28H200v588h-28Z"/>
    </Icon>
  );
});

IconMaterialBorderStyleW100.displayName = 'OnesyIconMaterialBorderStyleW100';

export default IconMaterialBorderStyleW100;
