import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarW100Filled'

      short_name='Star'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m311-228 45-192-149-129 196-17 77-181 77 181 196 17-149 129 45 192-169-102-169 102Z"/>
    </Icon>
  );
});

IconMaterialStarW100Filled.displayName = 'OnesyIconMaterialStarW100Filled';

export default IconMaterialStarW100Filled;
