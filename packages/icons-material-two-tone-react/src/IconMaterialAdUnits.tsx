import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdUnits = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnits'

      short_name='AdUnits'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><rect height="1" opacity=".3" width="10" x="7" y="3"/><rect height="1" opacity=".3" width="10" x="7" y="20"/><g><g><path d="M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1L17,1z M7,4V3h10v1H7L7,4z M7,18V6 h10v12H7L7,18z M7,21v-1h10v1H7L7,21z"/></g><g><polygon points="16,7 8,7 8,9 16,9 16,7"/></g></g></g>
    </Icon>
  );
});

IconMaterialAdUnits.displayName = 'OnesyIconMaterialAdUnits';

export default IconMaterialAdUnits;
