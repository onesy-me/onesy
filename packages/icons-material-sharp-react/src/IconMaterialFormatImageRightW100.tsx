import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatImageRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatImageRightW100'

      short_name='FormatImageRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-319v-322h322v322H466Zm28-28h266v-266H494v266ZM172-172v-28h616v28H172Zm0-147v-28h194v28H172Zm0-147v-28h194v28H172Zm0-147v-28h194v28H172Zm0-147v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialFormatImageRightW100.displayName = 'OnesyIconMaterialFormatImageRightW100';

export default IconMaterialFormatImageRightW100;
