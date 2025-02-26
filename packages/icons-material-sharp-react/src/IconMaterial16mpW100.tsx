import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial16mpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='16mpW100'

      short_name='16mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-516h28v-208h-88v28h60v180Zm140 0h148v-118H524v-62h120v-28H496v208Zm28-28v-62h92v62h-92ZM256-236h28v-180h72v120h28v-120h72v180h28v-208H256v208Zm300 0h28v-60h120v-148H556v208Zm28-88v-92h92v92h-92ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial16mpW100.displayName = 'OnesyIconMaterial16mpW100';

export default IconMaterial16mpW100;
