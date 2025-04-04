import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalShadesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesW100'

      short_name='VerticalShades'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-28h80v-588h536v588h80v28H132Zm108-28h119v-560H240v560Zm147 0h186v-560H387v560Zm214 0h119v-560H601v560Zm-361 0v-560 560Zm480 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesW100.displayName = 'OnesyIconMaterialVerticalShadesW100';

export default IconMaterialVerticalShadesW100;
