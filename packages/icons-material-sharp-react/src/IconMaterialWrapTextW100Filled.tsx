import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWrapTextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrapTextW100Filled'

      short_name='WrapText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M581-172 476-280l105-107 20 20-71 73h143q37 0 62-26.5t25-63.5q0-37-25-63t-62-26H212v-28h461q48 0 81.5 34.5T788-384q0 48-33.5 83T673-266H530l71 74-20 20Zm-369-94v-28h138v28H212Zm0-414v-28h539v28H212Z"/>
    </Icon>
  );
});

IconMaterialWrapTextW100Filled.displayName = 'OnesyIconMaterialWrapTextW100Filled';

export default IconMaterialWrapTextW100Filled;
