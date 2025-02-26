import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSortByAlphaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortByAlphaFilled'

      short_name='SortByAlpha'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-280 150-400h86l150 400h-82l-34-96H196l-32 96H80Zm140-164h104l-48-150h-6l-50 150Zm328 164v-76l202-252H556v-72h282v76L638-352h202v72H548ZM360-760l120-120 120 120H360ZM480-80 360-200h240L480-80Z"/>
    </Icon>
  );
});

IconMaterialSortByAlphaFilled.displayName = 'OnesyIconMaterialSortByAlphaFilled';

export default IconMaterialSortByAlphaFilled;
