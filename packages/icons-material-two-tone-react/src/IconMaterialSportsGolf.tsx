import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsGolf = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsGolf'

      short_name='SportsGolf'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,14c2.76,0,5-2.24,5-5s-2.24-5-5-5S7,6.24,7,9S9.24,14,12,14z M14,7c0.55,0,1,0.45,1,1 c0,0.55-0.45,1-1,1s-1-0.45-1-1C13,7.45,13.45,7,14,7z M12,5c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1s-1-0.45-1-1 C11,5.45,11.45,5,12,5z M10,7c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1S9,8.55,9,8C9,7.45,9.45,7,10,7z" opacity=".3"/><path d="M12,16c3.87,0,7-3.13,7-7c0-3.87-3.13-7-7-7C8.13,2,5,5.13,5,9C5,12.87,8.13,16,12,16z M12,4c2.76,0,5,2.24,5,5 s-2.24,5-5,5s-5-2.24-5-5S9.24,4,12,4z"/><circle cx="10" cy="8" r="1"/><circle cx="14" cy="8" r="1"/><circle cx="12" cy="6" r="1"/><path d="M7,19h2c1.1,0,2,0.9,2,2v1h2v-1c0-1.1,0.9-2,2-2h2v-2H7V19z"/></g></g>
    </Icon>
  );
});

IconMaterialSportsGolf.displayName = 'OnesyIconMaterialSportsGolf';

export default IconMaterialSportsGolf;
