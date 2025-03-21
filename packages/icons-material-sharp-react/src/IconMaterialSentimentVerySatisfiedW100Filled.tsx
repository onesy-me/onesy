import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentVerySatisfiedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentVerySatisfiedW100Filled'

      short_name='SentimentVerySatisfied'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-292q54 0 100-29.5t70-78.5H310q24 49 70 78.5T480-292ZM312-542l44-44 44 44 20-20-64-64-64 64 20 20Zm248 0 44-44 44 44 20-20-64-64-64 64 20 20Zm-79.83 410q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialSentimentVerySatisfiedW100Filled.displayName = 'OnesyIconMaterialSentimentVerySatisfiedW100Filled';

export default IconMaterialSentimentVerySatisfiedW100Filled;
