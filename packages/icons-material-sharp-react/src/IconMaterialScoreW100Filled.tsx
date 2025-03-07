import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreW100Filled'

      short_name='Score'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm324-324h28v-208h-28v208Zm116 0h36l-88-104 88-104h-36l-88 104 88 104Zm-316 0h128v-28H324v-62h100v-118H296v28h100v62H296v118Zm464 36v-40L520-260 360-420 200-260v40l160-160 160 160 240-240Z"/>
    </Icon>
  );
});

IconMaterialScoreW100Filled.displayName = 'OnesyIconMaterialScoreW100Filled';

export default IconMaterialScoreW100Filled;
