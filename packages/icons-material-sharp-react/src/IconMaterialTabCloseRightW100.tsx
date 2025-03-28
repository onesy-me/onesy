import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabCloseRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseRightW100'

      short_name='TabCloseRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m366-347 114-114 114 114 19-19-114-114 114-114-19-19-114 114-114-114-19 19 114 114-114 114 19 19ZM200-200v-560 560Zm-28 28v-616h616v366q-7-1-14-1.5t-14-.5v-336H200v560h336q0 7 .5 14t1.5 14H172Zm588 95-19-19 88-90H626v-28h203l-88-90 19-19 123 123L760-77Z"/>
    </Icon>
  );
});

IconMaterialTabCloseRightW100.displayName = 'OnesyIconMaterialTabCloseRightW100';

export default IconMaterialTabCloseRightW100;
