import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvShadowAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvShadowAddW100Filled'

      short_name='EvShadowAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-156v-120H560v-28h120v-120h28v120h120v28H708v120h-28Zm-200 24q-72.21 0-135.72-27.39-63.51-27.39-110.49-74.35-46.98-46.96-74.39-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.41 63.56 27.4 110.57 74.38 47.02 46.98 74.44 110.49Q828-552.21 828-480q0 5.93-.5 11.47Q827-463 827-458q-15-12-31.5-21T760-494l35-40q-5-29-15-57t-25-53L405-294q19 26 41.5 47t49.5 38q8 20 20.5 38t27.5 33q-16 3-31.5 4.5T480-132Zm-90-186 349-350q-16-22-34.5-40.5T664-742L349-427q5 29 15.5 56.5T390-318Zm-45-145 294-294q-15-9-31-16.5T575-786q-107 32-171.5 121.5T345-463Z"/>
    </Icon>
  );
});

IconMaterialEvShadowAddW100Filled.displayName = 'OnesyIconMaterialEvShadowAddW100Filled';

export default IconMaterialEvShadowAddW100Filled;
