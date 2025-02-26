import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackgroundDotLargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundDotLargeW100Filled'

      short_name='BackgroundDotLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M370-340q12.5 0 21.25-8.75T400-370q0-12.5-8.75-21.25T370-400q-12.5 0-21.25 8.75T340-370q0 12.5 8.75 21.25T370-340Zm0-220q12.5 0 21.25-8.75T400-590q0-12.5-8.75-21.25T370-620q-12.5 0-21.25 8.75T340-590q0 12.5 8.75 21.25T370-560Zm220 220q12.5 0 21.25-8.75T620-370q0-12.5-8.75-21.25T590-400q-12.5 0-21.25 8.75T560-370q0 12.5 8.75 21.25T590-340Zm0-220q12.5 0 21.25-8.75T620-590q0-12.5-8.75-21.25T590-620q-12.5 0-21.25 8.75T560-590q0 12.5 8.75 21.25T590-560ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialBackgroundDotLargeW100Filled.displayName = 'OnesyIconMaterialBackgroundDotLargeW100Filled';

export default IconMaterialBackgroundDotLargeW100Filled;
