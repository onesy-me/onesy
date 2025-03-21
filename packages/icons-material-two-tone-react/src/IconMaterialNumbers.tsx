import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNumbers = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Numbers'

      short_name='Numbers'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M20.5,10L21,8h-4l1-4h-2l-1,4h-4l1-4h-2L9,8H5l-0.5,2h4l-1,4h-4L3,16h4l-1,4h2l1-4h4l-1,4h2l1-4h4l0.5-2h-4l1-4H20.5z M13.5,14h-4l1-4h4L13.5,14z"/></g>
    </Icon>
  );
});

IconMaterialNumbers.displayName = 'OnesyIconMaterialNumbers';

export default IconMaterialNumbers;
