import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStopScreenShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareFilled'

      short_name='StopScreenShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m820-28-92-92H40v-80h607l-40-40H80v-526l-52-54 56-56L876-84l-56 56ZM400-446l-73-74q-5 9-6 19t-1 21v80h80v-46Zm428 200L577-497l63-63-120-120v80h-46L234-840h646v594h-52Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShareFilled.displayName = 'OnesyIconMaterialStopScreenShareFilled';

export default IconMaterialStopScreenShareFilled;
