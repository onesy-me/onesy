import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatAlignRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignRightW100'

      short_name='FormatAlignRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-760v-28h616v28H172Zm240 147v-28h376v28H412ZM172-466v-28h616v28H172Zm240 147v-28h376v28H412ZM172-172v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignRightW100.displayName = 'OnesyIconMaterialFormatAlignRightW100';

export default IconMaterialFormatAlignRightW100;
