import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInkEraserOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkEraserOffW100Filled'

      short_name='InkEraserOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-126 585-335 466-212H180l-90-90 259-269-223-223 20-20 668 668-20 20ZM660-412 423-649l145-151 239 239-147 149Z"/>
    </Icon>
  );
});

IconMaterialInkEraserOffW100Filled.displayName = 'OnesyIconMaterialInkEraserOffW100Filled';

export default IconMaterialInkEraserOffW100Filled;
