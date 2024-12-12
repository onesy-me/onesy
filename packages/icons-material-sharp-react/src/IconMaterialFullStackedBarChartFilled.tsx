import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFullStackedBarChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullStackedBarChartFilled'

      short_name='FullStackedBarChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160v-120h160v120H160Zm0-160v-160h160v160H160Zm0-200v-280h160v280H160Zm240 360v-280h160v280H400Zm0-320v-160h160v160H400Zm0-200v-120h160v120H400Zm240 520v-80h160v80H640Zm0-120v-160h160v160H640Zm0-200v-320h160v320H640Z"/>
    </Icon>
  );
});

IconMaterialFullStackedBarChartFilled.displayName = 'OnesyIconMaterialFullStackedBarChartFilled';

export default IconMaterialFullStackedBarChartFilled;
