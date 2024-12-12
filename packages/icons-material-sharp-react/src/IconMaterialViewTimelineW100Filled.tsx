import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewTimelineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewTimelineW100Filled'

      short_name='ViewTimeline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm96-134h184v-28H268v28Zm240-320h184v-28H508v28ZM388-466h184v-28H388v28Z"/>
    </Icon>
  );
});

IconMaterialViewTimelineW100Filled.displayName = 'OnesyIconMaterialViewTimelineW100Filled';

export default IconMaterialViewTimelineW100Filled;
