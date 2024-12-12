import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewsW100'

      short_name='News'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h446l170 170v446H172Zm28-28h560v-400H600v-160H200v560Zm106-132h348v-28H306v28Zm0-268h174v-28H306v28Zm0 134h348v-28H306v28ZM200-760v160-160 560-560Z"/>
    </Icon>
  );
});

IconMaterialNewsW100.displayName = 'OnesyIconMaterialNewsW100';

export default IconMaterialNewsW100;
