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
      <path d="M600.16-212Q488-212 410-289.84t-78-190Q332-592 409.84-670t190-78Q712-748 790-670.16t78 190Q868-368 790.16-290t-190 78ZM260-230q-78-27-123-96T92-480q0-85 45-154t123-96q8-3 14 1.29t6 13.98q0 3.73-2.54 6.9-2.55 3.16-6.46 4.83-69 26-110 87t-41 136q0 75 41 136t110 87q3.91 1.91 6.46 5.35Q280-248.21 280-244q0 8-6 12.5t-14 1.5Z"/>
    </Icon>
  );
});

IconMaterialTollW100Filled.displayName = 'OnesyIconMaterialTollW100Filled';

export default IconMaterialTollW100Filled;
