import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial50mpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='50mpW100'

      short_name='50mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M516-516h148v-208H516v208Zm28-28v-152h92v152h-92ZM256-236h28v-180h72v120h28v-120h72v180h28v-208H256v208Zm300 0h28v-60h120v-148H556v208Zm28-88v-92h92v92h-92ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0-560v560-560Zm76 244h148v-118H304v-62h120v-28H276v118h120v62H276v28Z"/>
    </Icon>
  );
});

IconMaterial50mpW100.displayName = 'OnesyIconMaterial50mpW100';

export default IconMaterial50mpW100;
