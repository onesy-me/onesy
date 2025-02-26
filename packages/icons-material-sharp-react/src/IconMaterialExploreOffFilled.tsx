import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExploreOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreOffFilled'

      short_name='ExploreOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-55-91-91q-49 32-104.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-60 17-115.5T146-700l-91-91 57-57 736 736-57 57ZM260-260l222-104-120-120-102 224Zm554 0L596-478l104-222-222 104-218-218q49-32 104.5-49T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 60-17 115.5T814-260Z"/>
    </Icon>
  );
});

IconMaterialExploreOffFilled.displayName = 'OnesyIconMaterialExploreOffFilled';

export default IconMaterialExploreOffFilled;
