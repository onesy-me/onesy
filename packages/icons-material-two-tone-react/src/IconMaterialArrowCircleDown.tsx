import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowCircleDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleDown'

      short_name='ArrowCircleDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8s8-3.59,8-8S16.41,4,12,4z M12,16l-4-4h3l0-4h2l0,4h3L12,16z" opacity=".3"/><path d="M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2L12,2z M13,12l0-4h-2l0,4H8l4,4l4-4H13z"/></g>
    </Icon>
  );
});

IconMaterialArrowCircleDown.displayName = 'OnesyIconMaterialArrowCircleDown';

export default IconMaterialArrowCircleDown;
