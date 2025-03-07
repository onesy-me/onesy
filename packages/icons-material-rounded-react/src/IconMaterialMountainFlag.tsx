import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMountainFlag = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MountainFlag'

      short_name='MountainFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m348-443 55 37 59-30q8-5 18-5t18 5l59 30 53-35-40-79H386l-38 77ZM209-160h541L646-369l-64 43q-9 6-19.5 6.5T542-324l-62-31-62 31q-10 5-20.5 4t-19.5-7l-66-43-103 210Zm-65 80q-23 0-34.5-19t-1.5-39l206-417q10-20 29.5-32.5T386-600h54v-240q0-17 11.5-28.5T480-880h208q11 0 17 9.5t1 19.5l-22 42q-2 5-2 9t2 9l22 42q5 10-1 19.5t-17 9.5H520v120h50q23 0 42 12t30 32l209 418q10 20-1.5 39T815-80H144Zm336-275Z"/>
    </Icon>
  );
});

IconMaterialMountainFlag.displayName = 'OnesyIconMaterialMountainFlag';

export default IconMaterialMountainFlag;
