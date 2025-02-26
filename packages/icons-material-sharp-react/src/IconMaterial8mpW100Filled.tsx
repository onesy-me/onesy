import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial8mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='8mpW100Filled'

      short_name='8mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M406-516h148v-208H406v208Zm28-118v-62h92v62h-92Zm0 90v-62h92v62h-92ZM256-236h28v-180h72v120h28v-120h72v180h28v-208H256v208Zm300 0h28v-60h120v-148H556v208Zm28-88v-92h92v92h-92ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial8mpW100Filled.displayName = 'OnesyIconMaterial8mpW100Filled';

export default IconMaterial8mpW100Filled;
