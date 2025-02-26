import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial20mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='20mpW100Filled'

      short_name='20mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M276-516h148v-28H304v-62h120v-118H276v28h120v62H276v118Zm260 0h148v-208H536v208Zm28-28v-152h92v152h-92ZM256-236h28v-180h72v120h28v-120h72v180h28v-208H256v208Zm300 0h28v-60h120v-148H556v208Zm28-88v-92h92v92h-92ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial20mpW100Filled.displayName = 'OnesyIconMaterial20mpW100Filled';

export default IconMaterial20mpW100Filled;
