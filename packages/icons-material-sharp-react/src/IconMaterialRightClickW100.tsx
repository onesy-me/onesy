import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRightClickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightClickW100'

      short_name='RightClick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m507-294 10-30q53-13 88-56t35-100q0-66-47-113t-113-47q-57 0-99.5 34.5T325-517l-31 9q11-69 63-114.5T480-668q78 0 133 55t55 133q0 71-46 123t-115 63ZM179-149l-30-30 199-198-100-33 232-70-70 232-33-100-198 199Z"/>
    </Icon>
  );
});

IconMaterialRightClickW100.displayName = 'OnesyIconMaterialRightClickW100';

export default IconMaterialRightClickW100;
