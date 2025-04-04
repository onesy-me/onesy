import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddComment = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddComment'

      short_name='AddComment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm0 15.17L18.83 16H4V4h16v13.17zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z"/><path d="M4 4v12h14.83L20 17.17V4H4zm13 7h-4v4h-2v-4H7V9h4V5h2v4h4v2z" opacity=".3"/>
    </Icon>
  );
});

IconMaterialAddComment.displayName = 'OnesyIconMaterialAddComment';

export default IconMaterialAddComment;
