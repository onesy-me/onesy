import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAreaChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChartW100Filled'

      short_name='AreaChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-295 523-502q-20-16-45-12.5T438-490L333-345q-8 11-20.5 12.5T290-339l-118-94v-83q0-19 16.5-27t31.5 3l72 54 161-227q15-21 41-24.5t46 12.5l122 97h66q25 0 42.5 17.5T788-568v273Zm-616 83v-187l99 80q20 16 45.5 12.5T357-331l105-144q8-11 20-12.5t22 6.5l284 221v48H172Z"/>
    </Icon>
  );
});

IconMaterialAreaChartW100Filled.displayName = 'OnesyIconMaterialAreaChartW100Filled';

export default IconMaterialAreaChartW100Filled;
