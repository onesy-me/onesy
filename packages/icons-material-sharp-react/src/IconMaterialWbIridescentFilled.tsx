import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbIridescentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbIridescentFilled'

      short_name='WbIridescent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-358v-240h560v240H200Zm240-402v-120h80v120h-80Zm308 112-56-56 72-72 56 56-72 72ZM440-80v-120h80v120h-80Zm324-100-72-72 56-56 72 72-56 56ZM212-648l-72-72 56-56 72 72-56 56Zm-16 468-56-56 72-72 56 56-72 72Z"/>
    </Icon>
  );
});

IconMaterialWbIridescentFilled.displayName = 'OnesyIconMaterialWbIridescentFilled';

export default IconMaterialWbIridescentFilled;
