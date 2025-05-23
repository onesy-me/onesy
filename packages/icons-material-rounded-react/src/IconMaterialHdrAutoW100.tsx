import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrAutoW100'

      short_name='HdrAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-412h188l39 105q2 4 5 6.5t7.77 2.5q8.23 0 11.73-6t1.5-13L499-694q-2-4-5.21-6t-7.27-2h-9.46q-4.06 0-7.06 2t-5 6L321-317q-2 7 1.5 13t11.73 6q4.77 0 7.77-2t5-7l39-105Zm10-26 84-220h4l80 220H396Zm84.17 306q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM480-480Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialHdrAutoW100.displayName = 'OnesyIconMaterialHdrAutoW100';

export default IconMaterialHdrAutoW100;
