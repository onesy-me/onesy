import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatAlignLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignLeftW100Filled'

      short_name='FormatAlignLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h616v28H172Zm0-147v-28h376v28H172Zm0-147v-28h616v28H172Zm0-147v-28h376v28H172Zm0-147v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignLeftW100Filled.displayName = 'OnesyIconMaterialFormatAlignLeftW100Filled';

export default IconMaterialFormatAlignLeftW100Filled;
