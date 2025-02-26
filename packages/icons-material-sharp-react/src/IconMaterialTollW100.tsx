import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTollW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TollW100'

      short_name='Toll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600.16-212Q488-212 410-289.84t-78-190Q332-592 409.84-670t190-78Q712-748 790-670.16t78 190Q868-368 790.16-290t-190 78ZM280-224q-86-23-137-94.5T92-480q0-90 51-161.5T280-736v30q-72 25-116 87t-44 139q0 77 44 139t116 87v30Zm320-256Zm0 240q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialTollW100.displayName = 'OnesyIconMaterialTollW100';

export default IconMaterialTollW100;
