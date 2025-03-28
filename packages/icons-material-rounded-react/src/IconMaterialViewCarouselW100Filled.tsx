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
      <path d="M132-395v-170q0-25.99 18.51-44.49Q169.02-628 195.01-628t44.49 18.51Q258-590.99 258-565v170q0 25.99-18.51 44.49Q220.98-332 194.99-332t-44.49-18.51Q132-369.01 132-395Zm246 143q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h204q26 0 43 17t17 43v336q0 26-17 43t-43 17H378Zm324-143v-170q0-25.99 18.51-44.49Q739.02-628 765.01-628t44.49 18.51Q828-590.99 828-565v170q0 25.99-18.51 44.49Q790.98-332 764.99-332t-44.49-18.51Q702-369.01 702-395Z"/>
    </Icon>
  );
});

IconMaterialViewCarouselW100Filled.displayName = 'OnesyIconMaterialViewCarouselW100Filled';

export default IconMaterialViewCarouselW100Filled;
