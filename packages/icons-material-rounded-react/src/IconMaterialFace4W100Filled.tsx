import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFace4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Face4W100Filled'

      short_name='Face4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-310q-21 0-35.5-14.5T310-360q0-21 14.5-35.5T360-410q21 0 35.5 14.5T410-360q0 21-14.5 35.5T360-310Zm240 0q-21 0-35.5-14.5T550-360q0-21 14.5-35.5T600-410q21 0 35.5 14.5T650-360q0 21-14.5 35.5T600-310ZM480-80q134 0 227-93t93-227q0-24-3-46.5T786-490q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-628q-32 78-91.5 135.5T160-406v6q0 134 93 227t227 93Zm.17 28Q408-52 344.44-79.4q-63.56-27.41-110.57-74.39-47.02-46.98-74.44-110.49Q132-327.79 132-400q0-11.8.5-23.4.5-11.6 2.5-22.6-48-25-76.5-71.68Q30-564.36 30-621q0-83 58-141t141-58q50.01 0 92.01 23Q363-774 390-736q22-6 44.53-9 22.54-3 45.47-3 72.21 0 135.72 27.39 63.51 27.39 110.49 74.35 46.98 46.96 74.38 110.43Q828-472.35 828-400.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-52 480.17-52Z"/>
    </Icon>
  );
});

IconMaterialFace4W100Filled.displayName = 'OnesyIconMaterialFace4W100Filled';

export default IconMaterialFace4W100Filled;
