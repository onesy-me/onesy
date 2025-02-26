import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBallotW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotW100'

      short_name='Ballot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-560h180v-28H480v28Zm0 188h180v-28H480v28ZM320-534h80v-80h-80v80Zm0 188h80v-80h-80v80ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialBallotW100.displayName = 'OnesyIconMaterialBallotW100';

export default IconMaterialBallotW100;
