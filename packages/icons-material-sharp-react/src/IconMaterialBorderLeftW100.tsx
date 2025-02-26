import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderLeftW100'

      short_name='BorderLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h28v616h-28Zm144 0v-40h40v40h-40Zm0-288v-40h40v40h-40Zm0-288v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-288v-40h40v40h-40Zm0-288v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialBorderLeftW100.displayName = 'OnesyIconMaterialBorderLeftW100';

export default IconMaterialBorderLeftW100;
