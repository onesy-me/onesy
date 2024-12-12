import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFullStackedBarChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullStackedBarChartW100'

      short_name='FullStackedBarChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-110h108v110H212Zm0-138v-108h108v108H212Zm0-136v-262h108v262H212Zm215 274v-262h108v262H427Zm0-290v-108h108v108H427Zm0-136v-110h108v110H427Zm213 426v-74h108v74H640Zm0-102v-108h108v108H640Zm0-136v-298h108v298H640Z"/>
    </Icon>
  );
});

IconMaterialFullStackedBarChartW100.displayName = 'OnesyIconMaterialFullStackedBarChartW100';

export default IconMaterialFullStackedBarChartW100;
