import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGuardian = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Guardian'

      short_name='Guardian'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-40q-186 0-313-69.5T40-280q0-29 12-56.5T87-390q23-26 56.5-46.5T219-474q15-6 29.5 1.5T268-449q5 15-2.5 29.5T243-398q-28 11-50.5 24.5T154-344q-17 16-25.5 32.5T120-280q0 64 108 112t252 48q144 0 252-48t108-112q0-15-8.5-31.5T806-344q-16-16-38.5-29.5T717-398q-15-7-22.5-21.5T692-449q5-16 19.5-23.5T741-474q37 15 67.5 33.5T862-400q29 27 43.5 57.5T920-280q0 101-127 170.5T480-40Zm-80-160q-17 0-28.5-11.5T360-240v-400H200q-17 0-28.5-11.5T160-680q0-17 11.5-28.5T200-720h560q17 0 28.5 11.5T800-680q0 17-11.5 28.5T760-640H600v400q0 17-11.5 28.5T560-200q-17 0-28.5-11.5T520-240v-160h-80v160q0 17-11.5 28.5T400-200Zm80-560q-33 0-56.5-23.5T400-840q0-33 23.5-56.5T480-920q33 0 56.5 23.5T560-840q0 33-23.5 56.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialGuardian.displayName = 'OnesyIconMaterialGuardian';

export default IconMaterialGuardian;
