import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeAndGardenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeAndGardenW100Filled'

      short_name='HomeAndGarden'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-384l-103 76-17-22 389-286 388 286-3 4q-37-18-78.5-18.5T700-537q-66-29-124.5-15.5T469-491q-48 48-61.5 106T423-260q-5 12-9.5 24t-6.5 24H212ZM700-97q-46 32-87 31.5T539-99q-33-33-33.5-74.5T537-260q-32-46-31.5-87t33.5-74q33-33 74.5-33.5T700-423q46-32 87-31.5t74 33.5q33 33 33.5 74.5T863-260q32 46 31.5 87T861-99q-33 33-74.5 33.5T700-97Zm0-137q11 0 18.5-7.5T726-260q0-11-7.5-18.5T700-286q-11 0-18.5 7.5T674-260q0 11 7.5 18.5T700-234Z"/>
    </Icon>
  );
});

IconMaterialHomeAndGardenW100Filled.displayName = 'OnesyIconMaterialHomeAndGardenW100Filled';

export default IconMaterialHomeAndGardenW100Filled;
