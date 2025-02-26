import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLegendToggleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LegendToggleW100'

      short_name='LegendToggle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-238v-28h588v28H186Zm0-148v-28h588v28H186Zm0-168v-33l213-130 201 143 174-124v35L600-540 398-683 186-554Z"/>
    </Icon>
  );
});

IconMaterialLegendToggleW100.displayName = 'OnesyIconMaterialLegendToggleW100';

export default IconMaterialLegendToggleW100;
