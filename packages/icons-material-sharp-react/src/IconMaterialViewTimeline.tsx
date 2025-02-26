import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewTimeline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewTimeline'

      short_name='ViewTimeline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h240v-80H240v80Zm240-320h240v-80H480v80ZM360-440h240v-80H360v80ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialViewTimeline.displayName = 'OnesyIconMaterialViewTimeline';

export default IconMaterialViewTimeline;
