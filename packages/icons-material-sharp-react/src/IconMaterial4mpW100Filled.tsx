import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial4mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4mpW100Filled'

      short_name='4mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M511-516h28v-60h40v-28h-40v-120h-28v120h-92v-120h-28v148h120v60ZM256-236h28v-180h72v120h28v-120h72v180h28v-208H256v208Zm300 0h28v-60h120v-148H556v208Zm28-88v-92h92v92h-92ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial4mpW100Filled.displayName = 'OnesyIconMaterial4mpW100Filled';

export default IconMaterial4mpW100Filled;
