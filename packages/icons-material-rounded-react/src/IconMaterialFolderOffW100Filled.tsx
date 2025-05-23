import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffW100Filled'

      short_name='FolderOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M777-296 350-724q-7-7-3.5-15.5T360-748q3 0 5.5 1t4.5 3l76 76h322q26 0 43 17t17 43v290q0 20-18.5 28t-32.5-6Zm-585 84q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h20l60 60h-40l-98-98q-4-4-4.5-9.5T134-806q5-5 10-5t10 5l692 692q4 4 4.5 9.5T846-94q-5 5-10 5t-10-5L708-212H192Z"/>
    </Icon>
  );
});

IconMaterialFolderOffW100Filled.displayName = 'OnesyIconMaterialFolderOffW100Filled';

export default IconMaterialFolderOffW100Filled;
