import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoGraph = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoGraph'

      short_name='AutoGraph'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><g><path d="M14.06,9.94L12,9l2.06-0.94L15,6l0.94,2.06L18,9l-2.06,0.94L15,12L14.06,9.94z M4,14l0.94-2.06L7,11l-2.06-0.94L4,8 l-0.94,2.06L1,11l2.06,0.94L4,14z M8.5,9l1.09-2.41L12,5.5L9.59,4.41L8.5,2L7.41,4.41L5,5.5l2.41,1.09L8.5,9z M4.5,20.5l6-6.01l4,4 L23,8.93l-1.41-1.41l-7.09,7.97l-4-4L3,19L4.5,20.5z"/></g>
    </Icon>
  );
});

IconMaterialAutoGraph.displayName = 'OnesyIconMaterialAutoGraph';

export default IconMaterialAutoGraph;
