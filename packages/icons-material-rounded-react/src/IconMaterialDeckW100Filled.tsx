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
      <path d="M466-120v-506H210q-11 0-14.5-10.5T201-653l262-183q8.17-5 17.09-5 8.91 0 16.91 5l262 183q9 6 5.5 16.5T750-626H494v506q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97Zm-320 0v-192l-25-140q-1-6 2.18-10.47 3.17-4.47 9.17-5.5 5.65-1.03 10.15 2.23 4.5 3.25 5.5 8.74l26 143h130q12.75 0 21.38 8.62Q334-296.75 334-284v164q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-166H174v166q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97Zm480 0v-164q0-12.75 8.63-21.38Q643.25-314 656-314h130l26-143q.93-5.49 4.97-8.74 4.03-3.26 10.24-2.23 6.21 1.03 9.5 5.5T839-452l-25 140v192q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-166H654v166q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97Z"/>
    </Icon>
  );
});

IconMaterialDeckW100Filled.displayName = 'OnesyIconMaterialDeckW100Filled';

export default IconMaterialDeckW100Filled;
