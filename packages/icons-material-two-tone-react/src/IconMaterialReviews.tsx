import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReviews = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Reviews'

      short_name='Reviews'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M4,17.17L5.17,16H20V4H4V17.17z M10.43,8.43L12,5l1.57,3.43L17,10l-3.43,1.57 L12,15l-1.57-3.43L7,10L10.43,8.43z" enableBackground="new" opacity=".3"/><path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,16H5.17L4,17.17V4h16V16z"/><polygon points="12,15 13.57,11.57 17,10 13.57,8.43 12,5 10.43,8.43 7,10 10.43,11.57"/></g></g>
    </Icon>
  );
});

IconMaterialReviews.displayName = 'OnesyIconMaterialReviews';

export default IconMaterialReviews;
