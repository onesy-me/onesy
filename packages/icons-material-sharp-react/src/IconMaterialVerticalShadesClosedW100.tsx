import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalShadesClosedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesClosedW100'

      short_name='VerticalShadesClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-28h80v-588h536v588h80v28H132Zm108-28h99v-560h-99v560Zm127 0h99v-560h-99v560Zm127 0h99v-560h-99v560Zm127 0h99v-560h-99v560Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesClosedW100.displayName = 'OnesyIconMaterialVerticalShadesClosedW100';

export default IconMaterialVerticalShadesClosedW100;
