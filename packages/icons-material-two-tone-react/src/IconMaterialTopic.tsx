import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Topic'

      short_name='Topic'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M20,18L4,18V6h5.17l2,2H20V18z M18,12H6v-2h12V12z M14,16H6v-2h8V16z" opacity=".3"/><path d="M20,6h-8l-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16.77c0.68,0,1.23-0.56,1.23-1.23V8C22,6.9,21.1,6,20,6z M20,18L4,18V6h5.17l2,2H20V18z M18,12H6v-2h12V12z M14,16H6v-2h8V16z"/></g>
    </Icon>
  );
});

IconMaterialTopic.displayName = 'OnesyIconMaterialTopic';

export default IconMaterialTopic;
