import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBallotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotW100Filled'

      short_name='Ballot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-560h180v-28H480v28Zm0 188h180v-28H480v28ZM320-534h80v-80h-80v80Zm0 188h80v-80h-80v80ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialBallotW100Filled.displayName = 'OnesyIconMaterialBallotW100Filled';

export default IconMaterialBallotW100Filled;
