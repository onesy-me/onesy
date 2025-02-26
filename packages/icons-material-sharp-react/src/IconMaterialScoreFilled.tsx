import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreFilled'

      short_name='Score'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm360-360h60v-240h-60v240Zm140 0h68l-80-120 80-120h-68l-80 120 80 120Zm-340 0h160v-60H340v-30h100v-150H280v60h100v30H280v150Zm480 40v-100L520-300 360-460 200-300v100l160-160 160 160 240-240Z"/>
    </Icon>
  );
});

IconMaterialScoreFilled.displayName = 'OnesyIconMaterialScoreFilled';

export default IconMaterialScoreFilled;
