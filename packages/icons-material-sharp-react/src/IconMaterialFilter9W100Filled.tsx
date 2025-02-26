import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter9W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9W100Filled'

      short_name='Filter9'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-386h148v-348H440v188h160v132H480v28Zm120-188H468v-132h132v132ZM266-292v-536h536v536H266ZM158-184v-504h28v476h476v28H158Z"/>
    </Icon>
  );
});

IconMaterialFilter9W100Filled.displayName = 'OnesyIconMaterialFilter9W100Filled';

export default IconMaterialFilter9W100Filled;
