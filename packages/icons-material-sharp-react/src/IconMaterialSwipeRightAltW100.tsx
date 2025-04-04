import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeRightAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRightAltW100'

      short_name='SwipeRightAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-306q-72.21 0-123.1-50.85-50.9-50.85-50.9-123T262.9-603q50.89-51 123.1-51 69 0 118 45.5T560-494h214l-90-90 20-20 124 124-124 124-20-20 90-90H560q-7 69-56 114.5T386-306Zm.12-28q60.88 0 103.38-42.62 42.5-42.62 42.5-103.5T489.38-583.5Q446.76-626 385.88-626T282.5-583.38Q240-540.76 240-479.88t42.62 103.38q42.62 42.5 103.5 42.5ZM386-480Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightAltW100.displayName = 'OnesyIconMaterialSwipeRightAltW100';

export default IconMaterialSwipeRightAltW100;
