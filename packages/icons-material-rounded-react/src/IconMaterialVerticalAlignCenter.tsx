import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalAlignCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignCenter'

      short_name='VerticalAlignCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m440-248-36 36q-11 11-28 11t-28-11q-11-11-11-28t11-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q11 11 11 28t-11 28q-11 11-28 11t-28-11l-36-36v128q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120v-128ZM200-440q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h560q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H200Zm240-272v-128q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v128l36-36q11-11 28-11t28 11q11 11 11 28t-11 28L508-588q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L348-692q-11-11-11-28t11-28q11-11 28-11t28 11l36 36Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignCenter.displayName = 'OnesyIconMaterialVerticalAlignCenter';

export default IconMaterialVerticalAlignCenter;
