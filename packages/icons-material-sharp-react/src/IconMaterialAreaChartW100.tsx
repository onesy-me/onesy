import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAreaChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChartW100'

      short_name='AreaChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-212v-364l120 90 198-279 172 137h126v416H172Zm148-68 160-220 280 218v-318H652L496-725 298-447l-98-73v144l120 96Z"/>
    </Icon>
  );
});

IconMaterialAreaChartW100.displayName = 'OnesyIconMaterialAreaChartW100';

export default IconMaterialAreaChartW100;
