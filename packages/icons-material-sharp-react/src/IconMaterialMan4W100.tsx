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
      <path d="m412-106-68-552h272l-68 552H412Zm68-624q-26.4 0-45.2-18.8Q416-767.6 416-794q0-26.4 18.8-45.2Q453.6-858 480-858q26.4 0 45.2 18.8Q544-820.4 544-794q0 26.4-18.8 45.2Q506.4-730 480-730Z"/>
    </Icon>
  );
});

IconMaterialMan4W100.displayName = 'OnesyIconMaterialMan4W100';

export default IconMaterialMan4W100;
