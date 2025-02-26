import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPentagon = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pentagon'

      short_name='Pentagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M298-200h364l123-369-305-213-305 213 123 369Zm0 80q-26 0-47-15t-29-40L99-543q-8-26 0-51t30-40l305-214q21-14 46-14t46 14l305 214q22 15 30 40t0 51L738-175q-8 25-29 40t-47 15H298Zm182-371Z"/>
    </Icon>
  );
});

IconMaterialPentagon.displayName = 'OnesyIconMaterialPentagon';

export default IconMaterialPentagon;
