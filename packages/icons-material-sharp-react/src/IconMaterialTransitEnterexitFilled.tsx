import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransitEnterexitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitEnterexitFilled'

      short_name='TransitEnterexit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-400h120v190l272-272 88 88-274 274h194v120H240Z"/>
    </Icon>
  );
});

IconMaterialTransitEnterexitFilled.displayName = 'OnesyIconMaterialTransitEnterexitFilled';

export default IconMaterialTransitEnterexitFilled;
