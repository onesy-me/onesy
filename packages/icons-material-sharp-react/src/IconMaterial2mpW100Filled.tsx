import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial2mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2mpW100Filled'

      short_name='2mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-236h28v-180h72v120h28v-120h72v180h28v-208H256v208Zm150-260h148v-28H434v-72h120v-128H406v28h120v72H406v128Zm150 260h28v-60h120v-148H556v208Zm28-88v-92h92v92h-92ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial2mpW100Filled.displayName = 'OnesyIconMaterial2mpW100Filled';

export default IconMaterial2mpW100Filled;
