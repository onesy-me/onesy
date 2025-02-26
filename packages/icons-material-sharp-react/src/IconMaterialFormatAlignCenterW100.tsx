import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatAlignCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignCenterW100'

      short_name='FormatAlignCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h616v28H172Zm160-147v-28h296v28H332ZM172-466v-28h616v28H172Zm160-147v-28h296v28H332ZM172-760v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignCenterW100.displayName = 'OnesyIconMaterialFormatAlignCenterW100';

export default IconMaterialFormatAlignCenterW100;
