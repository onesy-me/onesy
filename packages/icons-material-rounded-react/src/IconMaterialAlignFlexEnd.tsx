import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignFlexEnd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexEnd'

      short_name='AlignFlexEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm340-160q-17 0-28.5-11.5T420-280v-480q0-17 11.5-28.5T460-800h40q17 0 28.5 11.5T540-760v480q0 17-11.5 28.5T500-240h-40Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexEnd.displayName = 'OnesyIconMaterialAlignFlexEnd';

export default IconMaterialAlignFlexEnd;
