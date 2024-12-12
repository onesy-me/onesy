import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer3Alt1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer3Alt1Filled'

      short_name='Timer3Alt1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-270h240v-340H360v80h160v50H400v80h120v50H360v80Zm0-570v-80h240v80H360ZM480-80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialTimer3Alt1Filled.displayName = 'OnesyIconMaterialTimer3Alt1Filled';

export default IconMaterialTimer3Alt1Filled;
