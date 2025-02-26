import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCompactW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactW100Filled'

      short_name='ViewCompact'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M830-214v-532 532ZM130-588v-158h158v158H130Zm186 0v-158h150v158H316Zm178 0v-158h150v158H494Zm178 0v-158h158v158H672Zm0 188v-160h158v160H672Zm-178 0v-160h150v160H494Zm-178 0v-160h150v160H316Zm-186 0v-160h158v160H130Zm542 186v-158h158v158H672Zm-178 0v-158h150v158H494Zm-178 0v-158h150v158H316Zm-186 0v-158h158v158H130Z"/>
    </Icon>
  );
});

IconMaterialViewCompactW100Filled.displayName = 'OnesyIconMaterialViewCompactW100Filled';

export default IconMaterialViewCompactW100Filled;
