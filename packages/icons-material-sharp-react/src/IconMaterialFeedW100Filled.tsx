import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedW100Filled'

      short_name='Feed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h446l170 170v446H172Zm428-588v160h160L600-760ZM306-332h348v-28H306v28Zm0-268h174v-28H306v28Zm0 134h348v-28H306v28Z"/>
    </Icon>
  );
});

IconMaterialFeedW100Filled.displayName = 'OnesyIconMaterialFeedW100Filled';

export default IconMaterialFeedW100Filled;
