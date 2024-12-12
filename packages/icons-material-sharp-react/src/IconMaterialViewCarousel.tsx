import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCarousel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarousel'

      short_name='ViewCarousel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-280v-400h160v400H80Zm200 80v-560h400v560H280Zm440-80v-400h160v400H720Zm-360 0h240v-400H360v400Zm120-200Z"/>
    </Icon>
  );
});

IconMaterialViewCarousel.displayName = 'OnesyIconMaterialViewCarousel';

export default IconMaterialViewCarousel;
