import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventListW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventListW100'

      short_name='EventList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-172q-11 0-19.5-8.5T592-200v-180q0-11 8.5-19.5T620-408h180q11 0 19.5 8.5T828-380v180q0 11-8.5 19.5T800-172H620Zm0-28h180v-180H620v180Zm-474-76q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h292q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H146Zm474-276q-11 0-19.5-8.5T592-580v-180q0-11 8.5-19.5T620-788h180q11 0 19.5 8.5T828-760v180q0 11-8.5 19.5T800-552H620Zm0-28h180v-180H620v180Zm-474-76q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h292q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H146Zm564 366Zm0-380Z"/>
    </Icon>
  );
});

IconMaterialEventListW100.displayName = 'OnesyIconMaterialEventListW100';

export default IconMaterialEventListW100;
