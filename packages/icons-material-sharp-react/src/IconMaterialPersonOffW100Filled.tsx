import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonOffW100Filled'

      short_name='PersonOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-126 688-232H212v-52q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408h16.5q8.5 0 16.5 1L126-794l20-20 668 668-20 20Zm-74-219ZM541-531 391-681q15-23 38.5-35t50.5-12q45 0 76.5 31.5T588-620q0 27-12 50.5T541-531Z"/>
    </Icon>
  );
});

IconMaterialPersonOffW100Filled.displayName = 'OnesyIconMaterialPersonOffW100Filled';

export default IconMaterialPersonOffW100Filled;
