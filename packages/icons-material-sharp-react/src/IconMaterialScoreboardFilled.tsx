import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScoreboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreboardFilled'

      short_name='Scoreboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-360h180v-240H580v240Zm60-60v-120h60v120h-60Zm-440 60h180v-60H260v-40h120v-140H200v60h120v40H200v140Zm250-160h60v-60h-60v60Zm0 140h60v-60h-60v60ZM80-160v-640h200v-80h80v80h240v-80h80v80h200v640H80Zm370-500h60v-60h-60v60Zm0 420h60v-60h-60v60Z"/>
    </Icon>
  );
});

IconMaterialScoreboardFilled.displayName = 'OnesyIconMaterialScoreboardFilled';

export default IconMaterialScoreboardFilled;
