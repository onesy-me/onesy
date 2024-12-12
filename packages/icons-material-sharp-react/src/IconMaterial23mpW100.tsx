import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial23mpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='23mpW100'

      short_name='23mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M276-516h148v-28H304v-62h120v-118H276v28h120v62H276v118Zm240 0h148v-208H516v28h120v62h-80v28h80v62H516v28ZM256-236h28v-180h72v120h28v-120h72v180h28v-208H256v208Zm300 0h28v-60h120v-148H556v208Zm28-88v-92h92v92h-92ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial23mpW100.displayName = 'OnesyIconMaterial23mpW100';

export default IconMaterial23mpW100;
