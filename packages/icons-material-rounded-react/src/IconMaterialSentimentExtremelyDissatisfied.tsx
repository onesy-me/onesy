import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentExtremelyDissatisfied = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentExtremelyDissatisfied'

      short_name='SentimentExtremelyDissatisfied'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm140-320q25 0 42.5-17.5T680-540q0-15-7-28.5T654-590l9-5q8-5 10-12.5t-3-15.5q-5-8-12-10t-15 3l-106 60q-8 4-9.5 11.5T530-543q5 8 12.5 10.5T558-535l2-1q2 24 19 40t41 16Zm-280 0q24 0 41-16t19-40l2 1q8 5 15.5 3t12.5-10q4-8 2-15.5T422-570l-105-60q-8-4-15-2t-12 10q-5 8-3 15t10 12l9 5q-12 8-19 21.5t-7 28.5q0 25 17.5 42.5T340-480Zm140 40q-71 0-125 45.5T279-280h402q-22-69-76-114.5T480-440Zm0-40Z"/>
    </Icon>
  );
});

IconMaterialSentimentExtremelyDissatisfied.displayName = 'OnesyIconMaterialSentimentExtremelyDissatisfied';

export default IconMaterialSentimentExtremelyDissatisfied;
