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
      <path d="M480-440q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm.17 308q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0 0q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Zm45-264q4-2 6.5-4.5t4.5-6.5l104-184q6-10-2.1-18t-18.9-3L435-536q-4 2-6.5 4.5T424-525L320-341q-6 11 2 19t19 2l184-104Z"/>
    </Icon>
  );
});

IconMaterialExploreW100Filled.displayName = 'OnesyIconMaterialExploreW100Filled';

export default IconMaterialExploreW100Filled;
