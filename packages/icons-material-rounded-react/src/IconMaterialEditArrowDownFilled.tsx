import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditArrowDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditArrowDownFilled'

      short_name='EditArrowDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240q-17 0-28.5-11.5T120-280v-90q0-16 6.5-30.5T144-426l271-271q24-24 57.5-23t56.5 25l48 50q23 23 22.5 56T576-533L306-263q-11 11-25.5 17t-30.5 6h-90Zm309-299 50-51-49-49-51 50 50 50Zm283 351-92-92q-11-12-11-28.5t12-27.5q12-11 28.5-11.5T717-336l23 23v-447q0-17 11.5-28.5T780-800q17 0 28.5 11.5T820-760v448l24-24q11-11 28-11t28 11q11 11 11 28t-11 28l-92 92q-12 12-28 12t-28-12Z"/>
    </Icon>
  );
});

IconMaterialEditArrowDownFilled.displayName = 'OnesyIconMaterialEditArrowDownFilled';

export default IconMaterialEditArrowDownFilled;
