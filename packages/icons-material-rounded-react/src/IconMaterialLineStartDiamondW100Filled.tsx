import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartDiamondW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartDiamondW100Filled'

      short_name='LineStartDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M339-337 217-459q-9-9-9-21t9-21l122-122q9-9 21-9t21 9l129 129h300q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H510L381-337q-9 9-21 9t-21-9Z"/>
    </Icon>
  );
});

IconMaterialLineStartDiamondW100Filled.displayName = 'OnesyIconMaterialLineStartDiamondW100Filled';

export default IconMaterialLineStartDiamondW100Filled;
