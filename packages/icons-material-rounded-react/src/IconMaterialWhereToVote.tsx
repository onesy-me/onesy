import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWhereToVote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhereToVote'

      short_name='WhereToVote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-540-28-28q-12-12-28-12t-28 12q-12 12-12 28.5t12 28.5l56 57q12 12 28 12t28-12l142-142q12-12 12-28.5T608-653q-12-12-28.5-12T551-653L438-540Zm42 354q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 79q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 45-17.5 94.5t-51 103Q698-301 648-244T533-127q-11 10-25 15t-28 5Zm0-453Z"/>
    </Icon>
  );
});

IconMaterialWhereToVote.displayName = 'OnesyIconMaterialWhereToVote';

export default IconMaterialWhereToVote;
