import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForest = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forest'

      short_name='Forest'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-160H0l154-240H80l280-400 120 172 120-172 280 400h-74l154 240H680v160H520v-160h-80v160H280Zm389-240h145L659-560h67L600-740l-71 101 111 159h-74l103 160Zm-523 0h428L419-560h67L360-740 234-560h67L146-320Zm0 0h155-67 252-67 155-428Zm523 0H566h74-111 197-67 155-145Zm-149 80h160-160Zm201 0Z"/>
    </Icon>
  );
});

IconMaterialForest.displayName = 'OnesyIconMaterialForest';

export default IconMaterialForest;
