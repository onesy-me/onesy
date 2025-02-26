import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalSplitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitW100'

      short_name='VerticalSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-394v-28h268v28H172Zm0 142v-28h268v28H172Zm0-286v-28h268v28H172Zm0-142v-28h268v28H172Zm400 428v-456h216v456H572Zm28-28h160v-400H600v400Zm80-200Z"/>
    </Icon>
  );
});

IconMaterialVerticalSplitW100.displayName = 'OnesyIconMaterialVerticalSplitW100';

export default IconMaterialVerticalSplitW100;
