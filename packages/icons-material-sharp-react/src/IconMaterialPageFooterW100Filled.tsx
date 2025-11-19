import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageFooterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageFooterW100Filled'

      short_name='PageFooter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h616v28H172Zm0-128v-488h616v488H172Z"/>
    </Icon>
  );
});

IconMaterialPageFooterW100Filled.displayName = 'OnesyIconMaterialPageFooterW100Filled';

export default IconMaterialPageFooterW100Filled;
