import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalCafeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCafeW100'

      short_name='LocalCafe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-28h536v28H212Zm0-148v-468h616v202H684v266H212Zm28-28h416v-412H240v412Zm444-266h116v-146H684v146ZM240-348h416-416Z"/>
    </Icon>
  );
});

IconMaterialLocalCafeW100.displayName = 'OnesyIconMaterialLocalCafeW100';

export default IconMaterialLocalCafeW100;
