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
      <path d="m515-745 147 117h96q13 0 21.5 8.5T788-598v386H172v-304q0-19 16.5-27t31.5 3l72 54 180-253q8-11 20.5-12.5T515-745ZM200-520v144l120 96 160-220 280 218v-318H652L496-725 298-447l-98-73Z"/>
    </Icon>
  );
});

IconMaterialAreaChartW100.displayName = 'OnesyIconMaterialAreaChartW100';

export default IconMaterialAreaChartW100;
