import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatAlignJustifyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignJustifyW100'

      short_name='FormatAlignJustify'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h616v28H172Zm0-147v-28h616v28H172Zm0-147v-28h616v28H172Zm0-147v-28h616v28H172Zm0-147v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignJustifyW100.displayName = 'OnesyIconMaterialFormatAlignJustifyW100';

export default IconMaterialFormatAlignJustifyW100;
