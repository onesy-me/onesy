import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSegmentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SegmentFilled'

      short_name='Segment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240v-80h480v80H360Zm0-200v-80h480v80H360ZM120-640v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialSegmentFilled.displayName = 'OnesyIconMaterialSegmentFilled';

export default IconMaterialSegmentFilled;
