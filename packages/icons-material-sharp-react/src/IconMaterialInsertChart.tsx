import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInsertChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertChart'

      short_name='InsertChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280h80v-280h-80v280Zm160 0h80v-400h-80v400Zm160 0h80v-160h-80v160ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialInsertChart.displayName = 'OnesyIconMaterialInsertChart';

export default IconMaterialInsertChart;
