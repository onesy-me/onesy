import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentStressed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentStressed'

      short_name='SentimentStressed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-338 46 46q6 6 14 6t14-6l46-46 18 18q9 9 21 9t21-9q9-9 9-21t-9-21l-46-46q-6-6-14-6t-14 6l-46 46-46-46q-6-6-14-6t-14 6l-46 46-46-46q-6-6-14-6t-14 6l-46 46q-9 9-9 21t9 21q9 9 21 9t21-9l18-18 46 46q6 6 14 6t14-6l46-46ZM339-560l-52 38q-10 8-12.5 20t5.5 22q8 10 20 12.5t22-5.5l97-71q8-6 8-16t-8-16l-97-71q-10-8-22-5.5T280-640q-8 10-6 22t13 20l52 38Zm282 0 52-38q10-8 12.5-20t-5.5-22q-8-10-20-12.5t-22 5.5l-97 71q-8 6-8 16t8 16l97 71q10 8 22 5.5t20-12.5q8-10 6-22t-13-20l-52-38ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialSentimentStressed.displayName = 'OnesyIconMaterialSentimentStressed';

export default IconMaterialSentimentStressed;
