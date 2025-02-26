import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextIncreaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextIncreaseW100Filled'

      short_name='TextIncrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m72-226 212-508h20l212 508h-34l-60-146H162l-60 146H72Zm100-172h240L295.67-682H290L172-398Zm568 52v-120H620v-28h120v-120h28v120h120v28H768v120h-28Z"/>
    </Icon>
  );
});

IconMaterialTextIncreaseW100Filled.displayName = 'OnesyIconMaterialTextIncreaseW100Filled';

export default IconMaterialTextIncreaseW100Filled;
