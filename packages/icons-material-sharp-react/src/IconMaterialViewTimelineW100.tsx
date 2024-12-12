import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewTimelineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewTimelineW100'

      short_name='ViewTimeline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M268-306h184v-28H268v28Zm240-320h184v-28H508v28ZM388-466h184v-28H388v28ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialViewTimelineW100.displayName = 'OnesyIconMaterialViewTimelineW100';

export default IconMaterialViewTimelineW100;
