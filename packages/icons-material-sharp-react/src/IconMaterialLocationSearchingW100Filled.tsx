import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationSearchingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationSearchingW100Filled'

      short_name='LocationSearching'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-118v-52q-125-11-204-90t-90-204h-52v-28h52q11-125 90-204t204-90v-52h28v52q125 11 204 90t90 204h52v28h-52q-11 125-90 204t-204 90v52h-28Zm14-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Z"/>
    </Icon>
  );
});

IconMaterialLocationSearchingW100Filled.displayName = 'OnesyIconMaterialLocationSearchingW100Filled';

export default IconMaterialLocationSearchingW100Filled;
