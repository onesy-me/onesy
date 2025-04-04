import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentNeutralFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentNeutralFilled'

      short_name='SentimentNeutral'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm50 180h180q13 0 21.5-8.5T600-370q0-13-8.5-21.5T570-400H390q-13 0-21.5 8.5T360-370q0 13 8.5 21.5T390-340Zm90 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialSentimentNeutralFilled.displayName = 'OnesyIconMaterialSentimentNeutralFilled';

export default IconMaterialSentimentNeutralFilled;
