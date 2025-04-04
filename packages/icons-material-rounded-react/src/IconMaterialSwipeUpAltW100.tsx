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
      <path d="M480.15-212Q408-212 357-262.9q-51-50.89-51-123.1 0-69 45.5-118T466-560v-214l-80 80q-4 4-9.5 4.5t-10.72-4.72Q361-699 361-704q0-5 5-10l92.65-92.65Q464-812 469.13-814q5.14-2 11-2 5.87 0 10.87 2 5 2 10.35 7.35L594-714q4 4 4.5 9.5t-4.28 10.5q-5.22 5-10.22 5-5 0-10-5l-80-80v214q69 7 114.5 56T654-386q0 72.21-50.85 123.1-50.85 50.9-123 50.9Zm-.03-28q60.88 0 103.38-42.62 42.5-42.62 42.5-103.5T583.38-489.5Q540.76-532 479.88-532T376.5-489.38Q334-446.76 334-385.88t42.62 103.38q42.62 42.5 103.5 42.5ZM480-386Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpAltW100.displayName = 'OnesyIconMaterialSwipeUpAltW100';

export default IconMaterialSwipeUpAltW100;
