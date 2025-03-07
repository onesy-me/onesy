import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCookingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookingW100Filled'

      short_name='Cooking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-210v-62q0-14-9-23t-23-9H158v-28h222q24.75 0 42.38 17.62Q440-296.75 440-272v62h-28Zm108 0v-62q0-24.75 17.63-42.38Q555.25-332 580-332h222v28H580q-14 0-23 9t-9 23v62h-28ZM266-412q-39.17 0-66.58-27.42Q172-466.83 172-506v-98h616v98q0 39.17-27.42 66.58Q733.17-412 694-412H266Zm-94-272v-28h214v-10q0-12.75 8.5-21.38Q403-752 416.49-752h127.02q13.49 0 21.99 8.62 8.5 8.63 8.5 21.38v10h214v28H172Z"/>
    </Icon>
  );
});

IconMaterialCookingW100Filled.displayName = 'OnesyIconMaterialCookingW100Filled';

export default IconMaterialCookingW100Filled;
