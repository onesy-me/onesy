import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBubbleChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubbleChartW100Filled'

      short_name='BubbleChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M570.24-172q-33.24 0-56.74-23.26-23.5-23.27-23.5-56.5 0-33.24 23.26-56.74 23.27-23.5 56.5-23.5 33.24 0 56.74 23.26 23.5 23.27 23.5 56.5 0 33.24-23.26 56.74-23.27 23.5-56.5 23.5ZM660-452q-71 0-119.5-48.5T492-620q0-71 48.5-119.5T660-788q71 0 119.5 48.5T828-620q0 71-48.5 119.5T660-452ZM292-280q-49.5 0-84.75-35.25T172-400q0-49.5 35.25-84.75T292-520q49.5 0 84.75 35.25T412-400q0 49.5-35.25 84.75T292-280Z"/>
    </Icon>
  );
});

IconMaterialBubbleChartW100Filled.displayName = 'OnesyIconMaterialBubbleChartW100Filled';

export default IconMaterialBubbleChartW100Filled;
