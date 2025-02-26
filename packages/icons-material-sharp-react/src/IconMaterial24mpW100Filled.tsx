import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial24mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='24mpW100Filled'

      short_name='24mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M276-516h148v-28H304v-62h120v-118H276v28h120v62H276v118Zm350 0h28v-60h52v-28h-52v-120h-28v120h-80v-120h-28v148h108v60ZM256-236h28v-180h72v120h28v-120h72v180h28v-208H256v208Zm300 0h28v-60h120v-148H556v208Zm28-88v-92h92v92h-92ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial24mpW100Filled.displayName = 'OnesyIconMaterial24mpW100Filled';

export default IconMaterial24mpW100Filled;
