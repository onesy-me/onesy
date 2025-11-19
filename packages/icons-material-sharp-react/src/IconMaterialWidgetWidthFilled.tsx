import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidgetWidthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetWidthFilled'

      short_name='WidgetWidth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-240h240v240H80Zm280 0v-240h240v240H360Zm280 0v-240h240v240H640ZM80-360v-240h240v240H80Zm280 0v-240h240v240H360Zm280 0v-240h240v240H640ZM80-640v-240h800v240H80Z"/>
    </Icon>
  );
});

IconMaterialWidgetWidthFilled.displayName = 'OnesyIconMaterialWidgetWidthFilled';

export default IconMaterialWidgetWidthFilled;
