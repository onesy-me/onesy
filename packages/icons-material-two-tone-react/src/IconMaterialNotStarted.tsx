import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotStarted = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotStarted'

      short_name='NotStarted'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8s8-3.59,8-8C20,7.59,16.41,4,12,4z M11,16H9V8h2V16z M12,16V8 l5,4L12,16z" opacity=".3"/><path d="M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 s10-4.48,10-10C22,6.48,17.52,2,12,2L12,2z M11,8H9v8h2V8z M17,12l-5-4v8L17,12z"/></g>
    </Icon>
  );
});

IconMaterialNotStarted.displayName = 'OnesyIconMaterialNotStarted';

export default IconMaterialNotStarted;
