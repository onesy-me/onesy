import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonalBagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalBagW100'

      short_name='PersonalBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-132v-348q0-75 43-132.5T404-694v-14q0-31.67 22.24-53.83 22.23-22.17 54-22.17Q512-784 534-761.83q22 22.16 22 53.83v14q66 24 109 81.5T708-480v348H252Zm28-28h400v-320q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480v320Zm66-266h240v80h28v-108H346v28Zm86-276q12-3 24-4.5t24-1.5q12 0 24 1.5t24 4.5v-6q0-20.4-13.8-34.2Q500.4-756 480-756q-20.4 0-34.2 13.8Q432-728.4 432-708v6ZM280-160h400-400Z"/>
    </Icon>
  );
});

IconMaterialPersonalBagW100.displayName = 'OnesyIconMaterialPersonalBagW100';

export default IconMaterialPersonalBagW100;
