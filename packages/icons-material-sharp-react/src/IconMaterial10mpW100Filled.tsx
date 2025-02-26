import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial10mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='10mpW100Filled'

      short_name='10mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-516h28v-208h-88v28h60v180Zm130 0h148v-208H486v208Zm28-28v-152h92v152h-92ZM256-236h28v-180h72v120h28v-120h72v180h28v-208H256v208Zm300 0h28v-60h120v-148H556v208Zm28-88v-92h92v92h-92ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial10mpW100Filled.displayName = 'OnesyIconMaterial10mpW100Filled';

export default IconMaterial10mpW100Filled;
