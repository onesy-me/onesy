import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextDecreaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextDecreaseW100'

      short_name='TextDecrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m72-226 212-508h20l212 508h-34l-60-146H162l-60 146H72Zm100-172h240L296-682h-6L172-398Zm448-68v-28h268v28H620Z"/>
    </Icon>
  );
});

IconMaterialTextDecreaseW100.displayName = 'OnesyIconMaterialTextDecreaseW100';

export default IconMaterialTextDecreaseW100;
