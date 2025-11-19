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
      <path d="M640-160q-17 0-28.5-11.5T600-200v-40H480q-17 0-28.5-11.5T440-280v-160h-80v40q0 17-11.5 28.5T320-360H120q-17 0-28.5-11.5T80-400v-160q0-17 11.5-28.5T120-600h200q17 0 28.5 11.5T360-560v40h80v-160q0-17 11.5-28.5T480-720h120v-40q0-17 11.5-28.5T640-800h200q17 0 28.5 11.5T880-760v160q0 17-11.5 28.5T840-560H640q-17 0-28.5-11.5T600-600v-40h-80v320h80v-40q0-17 11.5-28.5T640-400h200q17 0 28.5 11.5T880-360v160q0 17-11.5 28.5T840-160H640Z"/>
    </Icon>
  );
});

IconMaterialFlowchartFilled.displayName = 'OnesyIconMaterialFlowchartFilled';

export default IconMaterialFlowchartFilled;
