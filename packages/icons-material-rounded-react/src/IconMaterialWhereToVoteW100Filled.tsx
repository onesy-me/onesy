import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWhereToVoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhereToVoteW100Filled'

      short_name='WhereToVote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-505-46-46q-4-4-9.5-4.5T372-551q-5 5-5 10t5 10l45 45q9 9 21 9t21-9l131-131q4-4 4.5-9.5T590-637q-5-5-10-5t-10 5L438-505Zm315-42q0 53-24.5 107.5t-60.5 106Q632-282 590-237t-78 78q-7 6-15.5 9t-16.5 3q-8 0-16-2.5t-15-8.5q-36-33-78-78.5T292.5-333q-36.5-51-61-106T207-547q0-120 78.5-200.5T480-828q116 0 194.5 80.5T753-547Z"/>
    </Icon>
  );
});

IconMaterialWhereToVoteW100Filled.displayName = 'OnesyIconMaterialWhereToVoteW100Filled';

export default IconMaterialWhereToVoteW100Filled;
