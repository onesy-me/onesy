import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWhereToVoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhereToVoteW100'

      short_name='WhereToVote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-465 162-162-20-20-142 142-56-56-20 20 76 76Zm42 296q110-94 177.5-198.5T725-547q0-110-69.5-182T480-801q-106 0-175.5 72T235-547q0 75 67.5 179.5T480-169Zm0 38Q345-252 276-357t-69-190q0-120 78.5-200.5T480-828q116 0 194.5 80.5T753-547q0 85-69 190T480-131Zm0-423Z"/>
    </Icon>
  );
});

IconMaterialWhereToVoteW100.displayName = 'OnesyIconMaterialWhereToVoteW100';

export default IconMaterialWhereToVoteW100;
