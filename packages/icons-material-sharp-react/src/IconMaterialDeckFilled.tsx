import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeckFilled'

      short_name='Deck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80v-520H80l400-280 400 280H520v520h-80Zm-320 0v-210L88-466l78-14 30 160h164v240h-80v-160h-80v160h-80Zm480 0v-240h164l30-160 78 14-32 176v210h-80v-160h-80v160h-80Z"/>
    </Icon>
  );
});

IconMaterialDeckFilled.displayName = 'OnesyIconMaterialDeckFilled';

export default IconMaterialDeckFilled;
