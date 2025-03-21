import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAnchorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnchorW100Filled'

      short_name='Anchor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-126q-67 0-124.5-19.5T256-199q-42-34-66-80.5T166-380v-58l94 71-54 54q29 72 97 113.5T466-154v-362H346v-28h120v-103q-34-7-57-32.5T386-740q0-39 27.5-66.5T480-834q39 0 66.5 27.5T574-740q0 35-23 60.5T494-647v103h120v28H494v362q95-4 163.5-45T754-312l-54-55 94-71v58q0 54-24 100.5T704-199q-42 34-99.5 53.5T480-126Zm0-548q27 0 46.5-19.5T546-740q0-27-19.5-46.5T480-806q-27 0-46.5 19.5T414-740q0 27 19.5 46.5T480-674Z"/>
    </Icon>
  );
});

IconMaterialAnchorW100Filled.displayName = 'OnesyIconMaterialAnchorW100Filled';

export default IconMaterialAnchorW100Filled;
