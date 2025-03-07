import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyOffW100Filled'

      short_name='KeyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-136 494-426h-46q-11 47-56.5 83.5T280-306q-74 0-124-50t-50-124q0-72 47-120.5T266-654L136-784q-4-4-4-9.5t4-10.5q4-5 10-4.5t10 4.5l648 648q4 4 4.5 9.5T804-136q-5 4-10.5 4t-9.5-4Zm76-344q0 6-2 11t-7 10l-48 49q-3 3-8.5 6t-10.5 3q-8 0-12.5-1.5T763-407l-42-32-51 36-131-131h266q6 0 11.5 2t10.5 7l24 24q5 5 7 10t2 11Zm-580 60q25 0 42.5-17.5T340-480q0-12-4.5-23t-13-19.5q-8.5-8.5-19.5-13t-23-4.5q-25 0-42.5 17.5T220-480q0 25 17.5 42.5T280-420Z"/>
    </Icon>
  );
});

IconMaterialKeyOffW100Filled.displayName = 'OnesyIconMaterialKeyOffW100Filled';

export default IconMaterialKeyOffW100Filled;
