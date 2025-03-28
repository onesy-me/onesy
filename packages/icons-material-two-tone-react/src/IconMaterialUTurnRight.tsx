import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUTurnRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UTurnRight'

      short_name='UTurnRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M6,9v12h2V9c0-2.21,1.79-4,4-4s4,1.79,4,4v4.17l-1.59-1.59L13,13l4,4l4-4l-1.41-1.41L18,13.17V9c0-3.31-2.69-6-6-6 S6,5.69,6,9z"/></g>
    </Icon>
  );
});

IconMaterialUTurnRight.displayName = 'OnesyIconMaterialUTurnRight';

export default IconMaterialUTurnRight;
