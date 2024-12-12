import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBallotFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotFilled'

      short_name='Ballot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-560h200v-80H480v80Zm0 240h200v-80H480v80ZM280-520h160v-160H280v160Zm0 240h160v-160H280v160ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialBallotFilled.displayName = 'OnesyIconMaterialBallotFilled';

export default IconMaterialBallotFilled;
