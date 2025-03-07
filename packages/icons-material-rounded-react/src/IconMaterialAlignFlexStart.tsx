import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignFlexStart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexStart'

      short_name='AlignFlexStart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-800q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H120Zm340 640q-17 0-28.5-11.5T420-200v-480q0-17 11.5-28.5T460-720h40q17 0 28.5 11.5T540-680v480q0 17-11.5 28.5T500-160h-40Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexStart.displayName = 'OnesyIconMaterialAlignFlexStart';

export default IconMaterialAlignFlexStart;
