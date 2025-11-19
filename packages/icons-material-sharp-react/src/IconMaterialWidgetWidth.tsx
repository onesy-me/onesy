import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidgetWidth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetWidth'

      short_name='WidgetWidth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-240h240v240H80Zm280 0v-240h240v240H360Zm280 0v-240h240v240H640ZM80-360v-240h240v240H80Zm280 0v-240h240v240H360Zm280 0v-240h240v240H640ZM80-640v-240h800v240H80Zm160 400Zm200 0h80-80Zm280 0ZM240-440v-80 80Zm240-40Zm240 40v-80 80ZM160-160h80v-80h-80v80Zm280 0h80v-80h-80v80Zm280 0h80v-80h-80v80ZM160-440h80v-80h-80v80Zm280 0h80v-80h-80v80Zm280 0h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialWidgetWidth.displayName = 'OnesyIconMaterialWidgetWidth';

export default IconMaterialWidgetWidth;
