import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkCell = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCell'

      short_name='NetworkCell'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 800-800v800H80Zm600-80h120v-526L680-566v406Z"/>
    </Icon>
  );
});

IconMaterialNetworkCell.displayName = 'OnesyIconMaterialNetworkCell';

export default IconMaterialNetworkCell;
