import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeartBrokenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartBrokenFilled'

      short_name='HeartBroken'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-83Q347-218 267.5-301t-121-138q-41.5-55-54-94T80-620q0-92 64-156t156-64q45 0 87 16.5t75 47.5l-62 216h120l-34 335 114-375H480l71-212q25-14 52.5-21t56.5-7q92 0 156 64t64 156q0 48-13 88t-55 95.5q-42 55.5-121 138T481-83Z"/>
    </Icon>
  );
});

IconMaterialHeartBrokenFilled.displayName = 'OnesyIconMaterialHeartBrokenFilled';

export default IconMaterialHeartBrokenFilled;
