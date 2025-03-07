import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkAsUnread = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnread'

      short_name='MarkAsUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><polygon opacity=".3" points="13.5,13.33 20,10 7,10"/><polygon opacity=".3" points="7,12 7,19 20,19 20,12 13.5,15.33"/><path d="M16.23,7h2.6c-0.06-0.47-0.36-0.94-0.79-1.17L10.5,2L2.8,5.83C2.32,6.09,2,6.64,2,7.17V15c0,1.1,0.9,2,2,2V7.4L10.5,4 L16.23,7z"/><path d="M20,8H7c-1.1,0-2,0.9-2,2v9c0,1.1,0.9,2,2,2h13c1.1,0,2-0.9,2-2v-9C22,8.9,21.1,8,20,8z M20,19H7v-7l6.5,3.33L20,12V19z M13.5,13.33L7,10h13L13.5,13.33z"/></g></g>
    </Icon>
  );
});

IconMaterialMarkAsUnread.displayName = 'OnesyIconMaterialMarkAsUnread';

export default IconMaterialMarkAsUnread;
