import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdjustW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdjustW100'

      short_name='Adjust'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-412q29 0 48.5-19.5T548-480q0-29-19.5-48.5T480-548q-29 0-48.5 19.5T412-480q0 29 19.5 48.5T480-412Zm.17 280q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialAdjustW100.displayName = 'OnesyIconMaterialAdjustW100';

export default IconMaterialAdjustW100;
