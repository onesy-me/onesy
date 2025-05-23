import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Replay'

      short_name='Replay'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><path d="M7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8c0-4.42-3.58-8-8-8V1L7,6z"/></g>
    </Icon>
  );
});

IconMaterialReplay.displayName = 'OnesyIconMaterialReplay';

export default IconMaterialReplay;
