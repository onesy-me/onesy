import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDownFilled'

      short_name='SwipeDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180-360 40-500l42-42 70 70q-6-27-9-54t-3-54q0-82 27-159t78-141l43 43q-43 56-65.5 121.5T200-580q0 26 3 51.5t10 50.5l65-64 42 42-140 140Zm431 250L304-253l38-83 116-9-126-344 75-28 110 301 38-14-55-150 75-28 55 151 37-14-41-112 75-28 41 113 38-14-14-37 75-28 125 338-355 129Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownFilled.displayName = 'OnesyIconMaterialSwipeDownFilled';

export default IconMaterialSwipeDownFilled;
