import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallSplitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplitW100'

      short_name='CallSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-212v-262L240-700v140h-28v-188h188v28H260l234 234v274h-28Zm92-326-20-20 162-162H560v-28h188v188h-28v-140L558-538Z"/>
    </Icon>
  );
});

IconMaterialCallSplitW100.displayName = 'OnesyIconMaterialCallSplitW100';

export default IconMaterialCallSplitW100;
