import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlowchartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlowchartFilled'

      short_name='Flowchart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-160v-80H440v-200h-80v80H80v-240h280v80h80v-200h160v-80h280v240H600v-80h-80v320h80v-80h280v240H600Z"/>
    </Icon>
  );
});

IconMaterialFlowchartFilled.displayName = 'OnesyIconMaterialFlowchartFilled';

export default IconMaterialFlowchartFilled;
