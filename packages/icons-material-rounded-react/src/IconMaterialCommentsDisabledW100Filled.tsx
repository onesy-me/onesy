import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommentsDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledW100Filled'

      short_name='CommentsDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M628-292H192q-26 0-43-17t-17-43v-416q0-5 .5-9t1.5-9l-34-34q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5L628-292Zm200-476v488q0 10-9.5 13.5T802-270L646-426h34q6 0 10-4t4-10q0-6-4-10t-10-4h-62l-92-92h154q6 0 10-4t4-10q0-6-4-10t-10-4H498l-92-92h274q6 0 10-4t4-10q0-6-4-10t-10-4H378l-83-83q-7-7-8-15.5t2-16.5q3-8 10-13.5t17-5.5h452q26 0 43 17t17 43ZM494-426l-28-28H280q-6 0-10 4t-4 10q0 6 4 10t10 4h214ZM374-546l-28-28h-66q-6 0-10 4t-4 10q0 6 4 10t10 4h94Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabledW100Filled.displayName = 'OnesyIconMaterialCommentsDisabledW100Filled';

export default IconMaterialCommentsDisabledW100Filled;
