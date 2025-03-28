import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentContentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentContentFilled'

      short_name='SentimentContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M390-340h180q13 0 21.5-8.5T600-370q0-13-8.5-21.5T570-400H390q-13 0-21.5 8.5T360-370q0 13 8.5 21.5T390-340Zm90 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM340-620q-25 0-47 11t-39 29q-8 9-6.5 21t12.5 19q10 7 22 5t22-10q8-7 17-10.5t19-3.5q10 0 19 4t17 10q10 8 22 9.5t22-5.5q11-7 13-18.5t-6-19.5q-17-18-39.5-29.5T340-620Zm280 0q-25 0-47.5 11T533-579q-8 8-6 20t13 19q10 7 22 5.5t22-9.5q8-6 17-10t19-4q11 0 20 4t17 10q10 8 21.5 9.5T700-540q11-7 13-19t-6-20q-17-19-39.5-30T620-620Z"/>
    </Icon>
  );
});

IconMaterialSentimentContentFilled.displayName = 'OnesyIconMaterialSentimentContentFilled';

export default IconMaterialSentimentContentFilled;
