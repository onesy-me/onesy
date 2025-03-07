import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial14mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='14mp'

      short_name='14mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,19h14V5H5V19z M18,13.5V16c0,0.55-0.45,1-1,1h-2v1.5h-1.5v-6H17C17.55,12.5,18,12.95,18,13.5z M12,5.5 h1.5v3H15v-3h1.5v3h1V10h-1v1.5H15V10h-3V5.5z M7,5.5h3v6H8.5V7H7V5.5z M6,13.5c0-0.55,0.45-1,1-1h4.5c0.55,0,1,0.45,1,1v5H11V14 h-1v3H8.5v-3h-1v4.5H6V13.5z" opacity=".3"/><rect height="1.5" opacity=".3" width="1.5" x="15" y="14"/><path d="M7.5,14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v5h1.5V14z"/><path d="M13.5,12.5v6H15V17h2c0.55,0,1-0.45,1-1v-2.5c0-0.55-0.45-1-1-1H13.5z M16.5,15.5H15V14h1.5V15.5z"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/><polygon points="8.5,11.5 10,11.5 10,5.5 7,5.5 7,7 8.5,7"/><polygon points="15,11.5 16.5,11.5 16.5,10 17.5,10 17.5,8.5 16.5,8.5 16.5,5.5 15,5.5 15,8.5 13.5,8.5 13.5,5.5 12,5.5 12,10 15,10"/></g></g>
    </Icon>
  );
});

IconMaterial14mp.displayName = 'OnesyIconMaterial14mp';

export default IconMaterial14mp;
