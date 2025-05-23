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
      <path d="M480-126q-67 0-124.5-19.5T256-199q-42-34-66-80.5T166-380v-28q0-9 8-13t16 1l42 32q11 8 12.5 21.5T236-343l-30 30q29 72 97 113.5T466-154v-362H360q-6 0-10-4t-4-10q0-6 4-10t10-4h106v-103q-34-7-57-32.5T386-740q0-39 27.5-66.5T480-834q39 0 66.5 27.5T574-740q0 35-23 60.5T494-647v103h106q6 0 10 4t4 10q0 6-4 10t-10 4H494v362q95-4 163.5-45T754-312l-30-31q-10-10-9-23.5t12-21.5l43-32q8-5 16-1t8 13v28q0 54-24 100.5T704-199q-42 34-99.5 53.5T480-126Zm0-548q27 0 46.5-19.5T546-740q0-27-19.5-46.5T480-806q-27 0-46.5 19.5T414-740q0 27 19.5 46.5T480-674Z"/>
    </Icon>
  );
});

IconMaterialAnchorW100Filled.displayName = 'OnesyIconMaterialAnchorW100Filled';

export default IconMaterialAnchorW100Filled;
