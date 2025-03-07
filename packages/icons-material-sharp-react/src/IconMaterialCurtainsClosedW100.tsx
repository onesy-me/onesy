import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurtainsClosedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsClosedW100'

      short_name='CurtainsClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-28h80v-588h536v588h80v28H132Zm108-28h159v-560H240v560Zm187 0h106v-560H427v560Zm134 0h159v-560H561v560Zm-321 0v-560 560Zm480 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialCurtainsClosedW100.displayName = 'OnesyIconMaterialCurtainsClosedW100';

export default IconMaterialCurtainsClosedW100;
