import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeUpAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUpAltW100'

      short_name='SwipeUpAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.15-212Q408-212 357-262.9q-51-50.89-51-123.1 0-69 45.5-118T466-560v-214l-90 90-20-20 124-124 124 124-20 20-90-90v214q69 7 114.5 56T654-386q0 72.21-50.85 123.1-50.85 50.9-123 50.9Zm-.03-28q60.88 0 103.38-42.62 42.5-42.62 42.5-103.5T583.38-489.5Q540.76-532 479.88-532T376.5-489.38Q334-446.76 334-385.88t42.62 103.38q42.62 42.5 103.5 42.5ZM480-386Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpAltW100.displayName = 'OnesyIconMaterialSwipeUpAltW100';

export default IconMaterialSwipeUpAltW100;
