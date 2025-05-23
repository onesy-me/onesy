import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTollW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TollW100Filled'

      short_name='Toll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600.16-212Q488-212 410-289.84t-78-190Q332-592 409.84-670t190-78Q712-748 790-670.16t78 190Q868-368 790.16-290t-190 78ZM280-224q-86-23-137-94.5T92-480q0-90 51-161.5T280-736v30q-72 25-116 87t-44 139q0 77 44 139t116 87v30Z"/>
    </Icon>
  );
});

IconMaterialTollW100Filled.displayName = 'OnesyIconMaterialTollW100Filled';

export default IconMaterialTollW100Filled;
