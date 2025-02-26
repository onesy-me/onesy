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
      <path d="M662-240h172q6 0 10 4t4 10q0 6-4 10t-10 4H634l28-28Zm-470 28q-6 0-11-2t-10-7l-39-39q-18-18-18.5-42t17.5-43l396-412q18-19 42-18.5t42 18.5l153 153q18 18 18.5 42.5T765-519L475-221q-5 5-10.5 7t-11.5 2H192Z"/>
    </Icon>
  );
});

IconMaterialInkEraserW100Filled.displayName = 'OnesyIconMaterialInkEraserW100Filled';

export default IconMaterialInkEraserW100Filled;
