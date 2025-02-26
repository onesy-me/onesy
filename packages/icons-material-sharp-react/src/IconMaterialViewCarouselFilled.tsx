import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCarouselFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselFilled'

      short_name='ViewCarousel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-280v-400h160v400H80Zm200 80v-560h400v560H280Zm440-80v-400h160v400H720Z"/>
    </Icon>
  );
});

IconMaterialViewCarouselFilled.displayName = 'OnesyIconMaterialViewCarouselFilled';

export default IconMaterialViewCarouselFilled;
