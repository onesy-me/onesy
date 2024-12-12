import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartDiamondW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartDiamondW100'

      short_name='LineStartDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-356 124-124-124-124-124 124 124 124Zm-21 19L217-459q-9-9-9-21t9-21l122-122q9-9 21-9t21 9l129 129h300q6 0 10 4t4 10q0 6-4 10t-10 4H510L381-337q-9 9-21 9t-21-9Zm21-143Z"/>
    </Icon>
  );
});

IconMaterialLineStartDiamondW100.displayName = 'OnesyIconMaterialLineStartDiamondW100';

export default IconMaterialLineStartDiamondW100;
