import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWhereToVote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhereToVote'

      short_name='WhereToVote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 3C8.69 3 6 5.69 6 9c0 3.54 3.82 8.86 6 11.47 1.75-2.11 6-7.63 6-11.47 0-3.31-2.69-6-6-6zm-1.53 11l-3.18-3.18L8.71 9.4l1.77 1.77 4.6-4.6 1.41 1.41L10.47 14z" opacity=".3"/><path d="M12 1C7.59 1 4 4.59 4 9c0 5.57 6.96 13.34 7.26 13.67l.74.82.74-.82C13.04 22.34 20 14.57 20 9c0-4.41-3.59-8-8-8zm0 19.47C9.82 17.86 6 12.54 6 9c0-3.31 2.69-6 6-6s6 2.69 6 6c0 3.83-4.25 9.36-6 11.47zm3.07-13.9l-4.6 4.6L8.71 9.4l-1.42 1.42L10.47 14l6.01-6.01z"/>
    </Icon>
  );
});

IconMaterialWhereToVote.displayName = 'OnesyIconMaterialWhereToVote';

export default IconMaterialWhereToVote;
