import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInkEraserW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkEraserW100Filled'

      short_name='InkEraser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M662-240h186v28H634l28-28Zm-482 28-90-90 478-498 238 238-340 350H180Z"/>
    </Icon>
  );
});

IconMaterialInkEraserW100Filled.displayName = 'OnesyIconMaterialInkEraserW100Filled';

export default IconMaterialInkEraserW100Filled;
