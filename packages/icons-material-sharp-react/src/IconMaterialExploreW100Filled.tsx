import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExploreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreW100Filled'

      short_name='Explore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m294-294 238-134 134-238-238 134-134 238Zm186-146q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm.17 308q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialExploreW100Filled.displayName = 'OnesyIconMaterialExploreW100Filled';

export default IconMaterialExploreW100Filled;
