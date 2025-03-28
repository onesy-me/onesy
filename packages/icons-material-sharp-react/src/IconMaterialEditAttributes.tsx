import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditAttributes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditAttributes'

      short_name='EditAttributes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h400q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H280Zm0-80h400q50 0 85-35t35-85q0-50-35-85t-85-35H280q-50 0-85 35t-35 85q0 50 35 85t85 35Zm42-28 142-142-42-42-100 100-40-40-42 42 82 82Zm158-92Z"/>
    </Icon>
  );
});

IconMaterialEditAttributes.displayName = 'OnesyIconMaterialEditAttributes';

export default IconMaterialEditAttributes;
