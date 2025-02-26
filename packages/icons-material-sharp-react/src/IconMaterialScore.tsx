import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Score'

      short_name='Score'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm240-340 160 160 240-240v-220H200v460l160-160Zm120-20v-240h60v240h-60Zm140 0-80-120 80-120h68l-80 120 80 120h-68Zm-340 0v-150h100v-30H280v-60h160v150H340v30h100v60H280Zm80 120L200-200h560v-240L520-200 360-360ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialScore.displayName = 'OnesyIconMaterialScore';

export default IconMaterialScore;
