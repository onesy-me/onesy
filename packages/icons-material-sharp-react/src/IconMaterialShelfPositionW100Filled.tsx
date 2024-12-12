import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShelfPositionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelfPositionW100Filled'

      short_name='ShelfPosition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-174h616v174H172Zm468-202v-414h148v414H640Zm-468 0v-414h148v414H172Zm176 0v-414h264v414H348Z"/>
    </Icon>
  );
});

IconMaterialShelfPositionW100Filled.displayName = 'OnesyIconMaterialShelfPositionW100Filled';

export default IconMaterialShelfPositionW100Filled;
