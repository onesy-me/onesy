import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidgetMedium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetMedium'

      short_name='WidgetMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-240h240v240H80Zm280 0v-240h240v240H360Zm280 0v-240h240v240H640ZM80-360v-240h240v240H80Zm280 0v-240h240v240H360Zm280 0v-240h240v240H640ZM80-640v-240h520v240H80Zm560 0v-240h240v240H640ZM240-240Zm200 0h80-80Zm280 0ZM240-440v-80 80Zm240-40Zm240 40v-80 80Zm0-280ZM160-160h80v-80h-80v80Zm280 0h80v-80h-80v80Zm280 0h80v-80h-80v80ZM160-440h80v-80h-80v80Zm280 0h80v-80h-80v80Zm280 0h80v-80h-80v80Zm0-280h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialWidgetMedium.displayName = 'OnesyIconMaterialWidgetMedium';

export default IconMaterialWidgetMedium;
