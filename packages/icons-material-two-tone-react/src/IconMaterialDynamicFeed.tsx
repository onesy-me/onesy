import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDynamicFeed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFeed'

      short_name='DynamicFeed'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><rect height="4" opacity=".3" width="8" x="12" y="7"/><g/><g><path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z"/><path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z"/><path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z"/></g></g><g display="none"><rect display="inline" height="4" opacity=".3" width="8" x="12" y="7"/><g display="inline"/><g display="inline"><path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z"/><path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z"/><path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z"/></g></g>
    </Icon>
  );
});

IconMaterialDynamicFeed.displayName = 'OnesyIconMaterialDynamicFeed';

export default IconMaterialDynamicFeed;
