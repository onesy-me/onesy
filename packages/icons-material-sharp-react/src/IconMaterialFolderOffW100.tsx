import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffW100'

      short_name='FolderOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m828-245-28-28v-367H434l-80-80-28-28h40l80 80h382v423Zm8 161L708-212H132v-536h80l28 28h-80v480h520L124-796l20-20 712 712-20 20ZM440-480Zm137-17Z"/>
    </Icon>
  );
});

IconMaterialFolderOffW100.displayName = 'OnesyIconMaterialFolderOffW100';

export default IconMaterialFolderOffW100;
