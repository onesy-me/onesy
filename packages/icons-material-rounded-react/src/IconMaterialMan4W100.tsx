import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMan4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man4W100'

      short_name='Man4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m409-132-57-459q-3-27 15-47t45-20h136q27 0 45 20t15 47l-57 459q-2 11-10.47 18.5-8.48 7.5-19.53 7.5h-82q-11.05 0-19.53-7.5Q411-121 409-132Zm71-598q-26.4 0-45.2-18.8Q416-767.6 416-794q0-26.4 18.8-45.2Q453.6-858 480-858q26.4 0 45.2 18.8Q544-820.4 544-794q0 26.4-18.8 45.2Q506.4-730 480-730Z"/>
    </Icon>
  );
});

IconMaterialMan4W100.displayName = 'OnesyIconMaterialMan4W100';

export default IconMaterialMan4W100;
