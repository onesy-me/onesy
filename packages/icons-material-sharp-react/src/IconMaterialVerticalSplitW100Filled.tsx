import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalSplitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitW100Filled'

      short_name='VerticalSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-394v-28h268v28H172Zm0 142v-28h268v28H172Zm0-286v-28h268v28H172Zm0-142v-28h268v28H172Zm400 428v-456h216v456H572Z"/>
    </Icon>
  );
});

IconMaterialVerticalSplitW100Filled.displayName = 'OnesyIconMaterialVerticalSplitW100Filled';

export default IconMaterialVerticalSplitW100Filled;
