import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSortByAlphaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortByAlphaW100Filled'

      short_name='SortByAlpha'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m112-302 148-356h28l146 356h-34l-36-94H182l-40 94h-30Zm80-120h160l-78-194h-4l-78 194Zm378 120v-26l210-304H578v-26h238v26L606-328h212v26H570ZM384-770l96-96 96 96H384Zm96 676-96-96h192l-96 96Z"/>
    </Icon>
  );
});

IconMaterialSortByAlphaW100Filled.displayName = 'OnesyIconMaterialSortByAlphaW100Filled';

export default IconMaterialSortByAlphaW100Filled;
