import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentExcitedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentExcitedW100'

      short_name='SentimentExcited'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-464v64q0 60 42 102t102 42q60 0 102-42t42-102v-64H336Zm144 180q-48 0-82-34t-34-82v-36h232v36q0 48-34 82t-82 34ZM340-664q-29 0-53 20t-36 55l27 7q9-24 25.5-38.5T340-636q20 1 36.5 15.5T402-582l27-7q-12-35-36-55t-53-20Zm280 0q-29 0-53 20t-36 55l27 7q9-25 25-39.5t37-14.5q21 0 37 14.5t25 39.5l27-7q-12-35-36-55t-53-20ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM480-480Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialSentimentExcitedW100.displayName = 'OnesyIconMaterialSentimentExcitedW100';

export default IconMaterialSentimentExcitedW100;
