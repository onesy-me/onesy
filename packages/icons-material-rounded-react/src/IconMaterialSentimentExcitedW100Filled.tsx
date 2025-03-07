import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentExcitedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentExcitedW100Filled'

      short_name='SentimentExcited'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-256q60 0 102-42t42-102v-34q0-12.75-8.62-21.38Q606.75-464 594-464H366q-12.75 0-21.37 8.62Q336-446.75 336-434v34q0 60 42 102t102 42Zm0-28q-48 0-82-34t-34-82v-36h232v36q0 48-34 82t-82 34ZM339.9-664q-28.9 0-50.9 18.5T256-601q-2 5 .5 9.5t7.72 6.5q4.78 2 10.78-1 6-3 8-8 9-17 23.5-29t33.5-13q19 1 33.5 13t23.5 29q2.41 5.24 7.7 7.62 5.3 2.38 10.08.38 5.22-2 8.22-6 3-4 1-9-11-26-33.1-44.5t-51-18.5Zm280 0q-28.9 0-50.9 18.5T536-601q-2 5 .5 9.5t7.72 6.5q4.78 2 10.78-1 6-3 8-8 8-17 23-29.5t34-12.5q19 0 34 12.5t23 29.5q2.41 5.24 7.7 7.62 5.3 2.38 10.08.38 5.22-2 8.22-6 3-4 1-9-11-26-33.1-44.5t-51-18.5ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialSentimentExcitedW100Filled.displayName = 'OnesyIconMaterialSentimentExcitedW100Filled';

export default IconMaterialSentimentExcitedW100Filled;
