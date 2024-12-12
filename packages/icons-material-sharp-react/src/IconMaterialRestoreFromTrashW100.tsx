import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRestoreFromTrashW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrashW100'

      short_name='RestoreFromTrash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-356h28v-194l90 90 20-20-124-124-124 124 20 20 90-90v194ZM252-172v-548h-40v-28h148v-28h240v28h148v28h-40v548H252Zm28-28h400v-520H280v520Zm0-520v520-520Z"/>
    </Icon>
  );
});

IconMaterialRestoreFromTrashW100.displayName = 'OnesyIconMaterialRestoreFromTrashW100';

export default IconMaterialRestoreFromTrashW100;
