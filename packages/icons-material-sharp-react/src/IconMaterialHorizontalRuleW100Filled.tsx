import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHorizontalRuleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRuleW100Filled'

      short_name='HorizontalRule'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-466v-28h536v28H212Z"/>
    </Icon>
  );
});

IconMaterialHorizontalRuleW100Filled.displayName = 'OnesyIconMaterialHorizontalRuleW100Filled';

export default IconMaterialHorizontalRuleW100Filled;
