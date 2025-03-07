import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentVeryDissatisfiedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentVeryDissatisfiedFilled'

      short_name='SentimentVeryDissatisfied'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m356-522 21 21q9 9 21 9t21-9q9-9 9-21t-9-21l-21-21 22-23q8-9 8-21t-9-21q-9-9-21-9t-21 9l-21 21-23-22q-9-8-21-8t-21 9q-8 8-8.5 20.5T290-587l22 23-21 21q-9 9-9 21t9 21q8 8 20.5 8.5T333-500l23-22Zm248 0 23 22q9 8 21 8t21-9q9-9 9-21t-9-21l-21-21 22-23q8-9 8-21t-9-21q-8-8-20.5-8.5T627-630l-23 22-21-21q-9-9-21-9t-21 9q-8 8-8.5 20.5T540-587l22 23-21 21q-9 9-9 21t9 21q9 9 21 9t21-9l21-21ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-340q-57 0-106.5 28T294-316q-6 12 1 24t21 12h328q14 0 21-12t1-24q-30-48-79-76t-107-28Z"/>
    </Icon>
  );
});

IconMaterialSentimentVeryDissatisfiedFilled.displayName = 'OnesyIconMaterialSentimentVeryDissatisfiedFilled';

export default IconMaterialSentimentVeryDissatisfiedFilled;
