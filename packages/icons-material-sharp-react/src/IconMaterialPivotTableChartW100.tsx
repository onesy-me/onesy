import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPivotTableChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PivotTableChartW100'

      short_name='PivotTableChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-660v-128h368v128H420ZM172-172v-368h128v368H172Zm0-488v-128h128v128H172Zm322 528L370-256l124-124 20 20-90 90h266v-266l-90 90-20-20 124-124 124 124-20 20-90-90v294H424l90 90-20 20Z"/>
    </Icon>
  );
});

IconMaterialPivotTableChartW100.displayName = 'OnesyIconMaterialPivotTableChartW100';

export default IconMaterialPivotTableChartW100;
