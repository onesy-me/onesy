import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoDeleteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDeleteW100Filled'

      short_name='AutoDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-172q-24.75 0-42.37-17.63Q252-207.25 252-232v-488h-30q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h138q0-11 8.5-19.5T388-776h184q11 0 19.5 8.5T600-748h138q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-30v141q0 11-8.5 19t-19.5 8q-29 0-58 6t-56 19v-99q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v114q-41 26-70.5 63.5T422-366v-260q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v332q0 5.95 4.02 9.98Q402.05-280 408-280q0 18.55 2.5 36.77Q413-225 418-207q4 13-4 24t-21 11h-81Zm367.77 84Q600-88 544-144.23q-56-56.22-56-136Q488-360 544.23-416q56.22-56 136-56Q760-472 816-415.77q56 56.22 56 136Q872-200 815.77-144q-56.22 56-136 56ZM694-285.58V-380q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v94q0 5.57 2 10.78 2 5.22 7 10.22l61 61q4 4 9.5 4.5T756-204q5-5 5-10t-5-10l-62-61.58Z"/>
    </Icon>
  );
});

IconMaterialAutoDeleteW100Filled.displayName = 'OnesyIconMaterialAutoDeleteW100Filled';

export default IconMaterialAutoDeleteW100Filled;
