import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentSadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentSadW100Filled'

      short_name='SentimentSad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-320h28v-10q0-77 54.5-131.5T480-516q77 0 131.5 54.5T666-330v10h28v-10q0-89.32-62.27-151.66Q569.45-544 480.23-544 391-544 328.5-481.66 266-419.32 266-330v10Zm32-289q32-8 65.5-27t56.5-43l-22-18q-20 20-49 36.5T294-637l4 28Zm364 0 4-28q-27-8-55.5-24T562-697l-22 18q23 23 56.5 42.5T662-609ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialSentimentSadW100Filled.displayName = 'OnesyIconMaterialSentimentSadW100Filled';

export default IconMaterialSentimentSadW100Filled;
