import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3mpW100Filled'

      short_name='3mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M406-516h148v-208H406v28h120v62h-80v28h80v62H406v28ZM256-236h28v-180h72v120h28v-120h72v180h28v-208H256v208Zm300 0h28v-60h120v-148H556v208Zm28-88v-92h92v92h-92ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial3mpW100Filled.displayName = 'OnesyIconMaterial3mpW100Filled';

export default IconMaterial3mpW100Filled;
