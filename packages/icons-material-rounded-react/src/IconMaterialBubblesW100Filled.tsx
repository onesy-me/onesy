import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBubblesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubblesW100Filled'

      short_name='Bubbles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M547-414 375-585q-4.58-3.75-4.79-9.38-.21-5.62 5.01-10.84Q380-610 385-610q5 0 10 5l171 171v-112q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v130q0 12.75-8.62 21.37Q576.75-386 564-386H434q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h113Zm191 202q-37.5 0-63.75-26.25T648-302q0-37.5 26.25-63.75T738-392q37.5 0 63.75 26.25T828-302q0 37.5-26.25 63.75T738-212Zm-546 0q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v180q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-180q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h340q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H192Z"/>
    </Icon>
  );
});

IconMaterialBubblesW100Filled.displayName = 'OnesyIconMaterialBubblesW100Filled';

export default IconMaterialBubblesW100Filled;
