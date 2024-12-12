import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationSearching = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationSearching'

      short_name='LocationSearching'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-40v-80q-125-14-214.5-103.5T122-438H42v-80h80q14-125 103.5-214.5T440-836v-80h80v80q125 14 214.5 103.5T838-518h80v80h-80q-14 125-103.5 214.5T520-120v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Z"/>
    </Icon>
  );
});

IconMaterialLocationSearching.displayName = 'OnesyIconMaterialLocationSearching';

export default IconMaterialLocationSearching;
