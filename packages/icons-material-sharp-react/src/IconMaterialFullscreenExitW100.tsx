import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFullscreenExitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenExitW100'

      short_name='FullscreenExit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M314-172v-142H172v-28h170v170h-28Zm305 0v-170h170v28H647v142h-28ZM172-618v-28h142v-142h28v170H172Zm447 0v-170h28v142h142v28H619Z"/>
    </Icon>
  );
});

IconMaterialFullscreenExitW100.displayName = 'OnesyIconMaterialFullscreenExitW100';

export default IconMaterialFullscreenExitW100;
