import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabNewRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabNewRightW100'

      short_name='TabNewRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-560 560Zm-28 28v-616h616v366q-6.65-1-13.65-1.5T760-424v-336H200v560h336q0 7.35.5 14.35T538-172H172Zm588 95-19-19 88-90H626v-28h203l-88-90 19-19 123 123L760-77ZM466-306h28v-160h160v-28H494v-160h-28v160H306v28h160v160Z"/>
    </Icon>
  );
});

IconMaterialTabNewRightW100.displayName = 'OnesyIconMaterialTabNewRightW100';

export default IconMaterialTabNewRightW100;
