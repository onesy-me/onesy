import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial21mpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='21mpW100'

      short_name='21mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M316-516h148v-28H344v-62h120v-118H316v28h120v62H316v118Zm280 0h28v-208h-88v28h60v180ZM256-236h28v-180h72v120h28v-120h72v180h28v-208H256v208Zm300 0h28v-60h120v-148H556v208Zm28-88v-92h92v92h-92ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial21mpW100.displayName = 'OnesyIconMaterial21mpW100';

export default IconMaterial21mpW100;
