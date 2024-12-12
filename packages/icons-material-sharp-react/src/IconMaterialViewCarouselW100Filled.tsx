import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCarouselW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselW100Filled'

      short_name='ViewCarousel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-332v-296h126v296H132Zm186 80v-456h324v456H318Zm384-80v-296h126v296H702Z"/>
    </Icon>
  );
});

IconMaterialViewCarouselW100Filled.displayName = 'OnesyIconMaterialViewCarouselW100Filled';

export default IconMaterialViewCarouselW100Filled;
