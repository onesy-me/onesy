import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkCellW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCellW100'

      short_name='NetworkCell'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m132-132 696-696v696H132Zm537-28h131v-600L669-629v469Z"/>
    </Icon>
  );
});

IconMaterialNetworkCellW100.displayName = 'OnesyIconMaterialNetworkCellW100';

export default IconMaterialNetworkCellW100;
