import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBubbleChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubbleChartW100'

      short_name='BubbleChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M570.24-172q-33.24 0-56.74-23.26-23.5-23.27-23.5-56.5 0-33.24 23.26-56.74 23.27-23.5 56.5-23.5 33.24 0 56.74 23.26 23.5 23.27 23.5 56.5 0 33.24-23.26 56.74-23.27 23.5-56.5 23.5Zm-.24-28q21 0 36.5-15.5T622-252q0-21-15.5-36.5T570-304q-21 0-36.5 15.5T518-252q0 21 15.5 36.5T570-200Zm90-252q-71 0-119.5-48.5T492-620q0-71 48.5-119.5T660-788q71 0 119.5 48.5T828-620q0 71-48.5 119.5T660-452Zm0-28q59 0 99.5-40.5T800-620q0-59-40.5-99.5T660-760q-59 0-99.5 40.5T520-620q0 59 40.5 99.5T660-480ZM292-280q-49.5 0-84.75-35.25T172-400q0-49.5 35.25-84.75T292-520q49.5 0 84.75 35.25T412-400q0 49.5-35.25 84.75T292-280Zm.04-28Q330-308 357-335.04q27-27.03 27-65Q384-438 356.96-465q-27.03-27-65-27Q254-492 227-464.96q-27 27.03-27 65Q200-362 227.04-335q27.03 27 65 27ZM570-252Zm90-368ZM292-400Z"/>
    </Icon>
  );
});

IconMaterialBubbleChartW100.displayName = 'OnesyIconMaterialBubbleChartW100';

export default IconMaterialBubbleChartW100;
