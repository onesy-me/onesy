import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeckW100Filled'

      short_name='Deck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-106v-520H162l318-222 318 222H494v520h-28Zm-320 0v-206l-28-154 28-4 28 156h160v208h-28v-180H174v180h-28Zm480 0v-208h160l28-156 28 4-28 154v206h-28v-180H654v180h-28Z"/>
    </Icon>
  );
});

IconMaterialDeckW100Filled.displayName = 'OnesyIconMaterialDeckW100Filled';

export default IconMaterialDeckW100Filled;
