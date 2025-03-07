import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebStories = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebStories'

      short_name='WebStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="16" opacity=".3" width="9" x="4" y="4"/><path d="M17,4v16c1.1,0,2-0.9,2-2V6C19,4.9,18.1,4,17,4z"/><path d="M13,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h9c1.1,0,2-0.9,2-2V4C15,2.9,14.1,2,13,2z M13,20H4V4h9V20z"/><path d="M21,6v12c0.83,0,1.5-0.67,1.5-1.5v-9C22.5,6.67,21.83,6,21,6z"/></g></g>
    </Icon>
  );
});

IconMaterialWebStories.displayName = 'OnesyIconMaterialWebStories';

export default IconMaterialWebStories;
