import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoStoriesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoStoriesW100Filled'

      short_name='AutoStories'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-235q-6 0-12.5-1.5T454-241q-45-26-93.5-38.5T260-292q-28 0-55 3.5T152-276q-22 8-41-6t-19-38v-356q0-16 9-28.5t23-17.5q32-13 66.5-19.5T260-748q59 0 114 19t106 49v420q50-32 106.5-46T700-320q32 0 50.5 1.5T810-306q11 3 20.5.5T840-322v-400q3 0 5.5 1t4.5 3q9 5 13.5 14t4.5 20v362q0 24-20.5 37.5T802-278q-25-8-50.5-11t-51.5-3q-53 0-103.5 12.5T501-241q-5 3-11 4.5t-12 1.5Zm109-149q-8 7-17.5 3t-9.5-15v-285q0-3 1.5-6.5t3.5-5.5l168-168q8-8 17.5-3.5T760-849v302q0 4-1.5 7t-3.5 5L587-384Z"/>
    </Icon>
  );
});

IconMaterialAutoStoriesW100Filled.displayName = 'OnesyIconMaterialAutoStoriesW100Filled';

export default IconMaterialAutoStoriesW100Filled;
