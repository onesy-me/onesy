import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewTimelineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewTimelineFilled'

      short_name='ViewTimeline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm120-160h240v-80H240v80Zm240-320h240v-80H480v80ZM360-440h240v-80H360v80Z"/>
    </Icon>
  );
});

IconMaterialViewTimelineFilled.displayName = 'OnesyIconMaterialViewTimelineFilled';

export default IconMaterialViewTimelineFilled;
