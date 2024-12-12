import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRestoreFromTrashW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrashW100Filled'

      short_name='RestoreFromTrash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-356h28v-194l90 90 20-20-124-124-124 124 20 20 90-90v194ZM252-172v-548h-40v-28h148v-28h240v28h148v28h-40v548H252Z"/>
    </Icon>
  );
});

IconMaterialRestoreFromTrashW100Filled.displayName = 'OnesyIconMaterialRestoreFromTrashW100Filled';

export default IconMaterialRestoreFromTrashW100Filled;
