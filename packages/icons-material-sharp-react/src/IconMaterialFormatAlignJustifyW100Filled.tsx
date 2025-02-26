import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatAlignJustifyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignJustifyW100Filled'

      short_name='FormatAlignJustify'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h616v28H172Zm0-147v-28h616v28H172Zm0-147v-28h616v28H172Zm0-147v-28h616v28H172Zm0-147v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignJustifyW100Filled.displayName = 'OnesyIconMaterialFormatAlignJustifyW100Filled';

export default IconMaterialFormatAlignJustifyW100Filled;
