import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowCircleRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleRight'

      short_name='ArrowCircleRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,12c0-4.41,3.59-8,8-8s8,3.59,8,8s-3.59,8-8,8S4,16.41,4,12 M12,11l-4,0v2l4,0v3l4-4l-4-4V11z" opacity=".3"/><path d="M4,12c0-4.41,3.59-8,8-8s8,3.59,8,8s-3.59,8-8,8S4,16.41,4,12 M2,12c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10 c0-5.52-4.48-10-10-10C6.48,2,2,6.48,2,12L2,12z M12,11l-4,0v2l4,0v3l4-4l-4-4V11z"/></g></g>
    </Icon>
  );
});

IconMaterialArrowCircleRight.displayName = 'OnesyIconMaterialArrowCircleRight';

export default IconMaterialArrowCircleRight;
