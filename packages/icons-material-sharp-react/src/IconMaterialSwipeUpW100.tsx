import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUpW100'

      short_name='SwipeUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M263-404q-44-59-67.5-127T172-672q0-38 5-75.5t15-74.5l-82 82-19-20 117-117 117 117-19 20-85-85q-11 37-16 75.5t-5 77.5q0 67 22 130t61 118l-20 20Zm65 105 18-35 149-17-120-327 27-10 132 363-165 15 245 113 258-94-96-262 26-10 106 289-295 107-285-132Zm257-127-60-164 27-10 60 164-27 10Zm105-39-45-125 26-10 46 126-27 9Zm-19 125Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpW100.displayName = 'OnesyIconMaterialSwipeUpW100';

export default IconMaterialSwipeUpW100;
