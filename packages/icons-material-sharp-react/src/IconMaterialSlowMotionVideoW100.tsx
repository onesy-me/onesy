import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSlowMotionVideoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlowMotionVideoW100'

      short_name='SlowMotionVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M206-264q-33-44-49.5-84.5T134-440h28q6 44 22 83.5t42 72.5l-20 20Zm-72-256q6-51 22.5-91t49.5-84l20 20q-26 33-42 72t-22 83h-28Zm304 386q-57-9-94.5-25.5T262-208l20-20q32 25 71.5 42.5T438-162v28ZM284-733l-20-20q44-32 81.5-48t94.5-25v28q-45 6-84.5 23T284-733Zm122 385v-264l206 132-206 132Zm114 214v-28q121-17 200.5-107T800-480q0-121-79.5-211T520-798v-28q133 14 220.5 113T828-480q0 134-87.5 233T520-134Z"/>
    </Icon>
  );
});

IconMaterialSlowMotionVideoW100.displayName = 'OnesyIconMaterialSlowMotionVideoW100';

export default IconMaterialSlowMotionVideoW100;
