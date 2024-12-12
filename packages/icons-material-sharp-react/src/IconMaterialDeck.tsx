import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Deck'

      short_name='Deck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80v-520H80l400-280 400 280H520v520h-80Zm40-600h146-292 146ZM120-80v-210L88-466l78-14 30 160h164v240h-80v-160h-80v160h-80Zm480 0v-240h164l30-160 78 14-32 176v210h-80v-160h-80v160h-80ZM334-680h292L480-782 334-680Z"/>
    </Icon>
  );
});

IconMaterialDeck.displayName = 'OnesyIconMaterialDeck';

export default IconMaterialDeck;
