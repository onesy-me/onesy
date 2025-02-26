import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatImageLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatImageLeftW100'

      short_name='FormatImageLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-319v-322h322v322H172Zm28-28h266v-266H200v266Zm-28-413v-28h616v28H172Zm422 147v-28h194v28H594Zm0 147v-28h194v28H594Zm0 147v-28h194v28H594ZM172-172v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialFormatImageLeftW100.displayName = 'OnesyIconMaterialFormatImageLeftW100';

export default IconMaterialFormatImageLeftW100;
