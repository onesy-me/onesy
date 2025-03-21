import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProcessChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcessChart'

      short_name='ProcessChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M96-240q-15-8-20.5-23.5T78-294l204-408q8-15 23.5-20.5T336-720q15 8 20.5 23.5T354-666L150-258q-8 15-23.5 20.5T96-240Zm264 0q-15-8-20.5-23.5T342-294l204-408q8-15 23.5-20.5T600-720q15 8 20.5 23.5T618-666L414-258q-8 15-23.5 20.5T360-240Zm264 0q-15-8-20.5-23.5T606-294l204-408q8-15 23.5-20.5T864-720q15 8 20.5 23.5T882-666L678-258q-8 15-23.5 20.5T624-240Z"/>
    </Icon>
  );
});

IconMaterialProcessChart.displayName = 'OnesyIconMaterialProcessChart';

export default IconMaterialProcessChart;
