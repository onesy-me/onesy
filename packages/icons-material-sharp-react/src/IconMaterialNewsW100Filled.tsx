import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewsW100Filled'

      short_name='News'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h446l170 170v446H172Zm428-588v160h160L600-760ZM306-332h348v-28H306v28Zm0-268h174v-28H306v28Zm0 134h348v-28H306v28Z"/>
    </Icon>
  );
});

IconMaterialNewsW100Filled.displayName = 'OnesyIconMaterialNewsW100Filled';

export default IconMaterialNewsW100Filled;
