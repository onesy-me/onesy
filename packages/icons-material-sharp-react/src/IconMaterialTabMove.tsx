import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabMove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabMove'

      short_name='TabMove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-200h80v120h560v-480H200v120h-80v-280h720v720H120Zm340-140-56-56 83-84H120v-80h367l-83-84 56-56 180 180-180 180Z"/>
    </Icon>
  );
});

IconMaterialTabMove.displayName = 'OnesyIconMaterialTabMove';

export default IconMaterialTabMove;
