import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeRightAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRightAlt'

      short_name='SwipeRightAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280q-83 0-141.5-58.5T160-480q0-83 58.5-141.5T360-680q73 0 127.5 45.5T556-520h171l-63-64 56-56 160 160-160 160-57-56 64-64H556q-14 69-68.5 114.5T360-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightAlt.displayName = 'OnesyIconMaterialSwipeRightAlt';

export default IconMaterialSwipeRightAlt;
