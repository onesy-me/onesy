import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApiW100Filled'

      short_name='Api'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-400-80-80 80-80 80 80-80 80Zm-85-217-58-58 143-143 143 143-58 58-85-85-85 85ZM285-337 142-480l143-143 58 58-85 85 85 85-58 58Zm390 0-58-58 85-85-85-85 58-58 143 143-143 143ZM480-142 337-285l58-58 85 85 85-85 58 58-143 143Z"/>
    </Icon>
  );
});

IconMaterialApiW100Filled.displayName = 'OnesyIconMaterialApiW100Filled';

export default IconMaterialApiW100Filled;
