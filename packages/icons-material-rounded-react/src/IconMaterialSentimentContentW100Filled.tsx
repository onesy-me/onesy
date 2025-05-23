import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentContentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentContentW100Filled'

      short_name='SentimentContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M390-356h180q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4H390q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4Zm90.17 224q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM345-604q-20 0-39 9.5T273-571q-4 4-3.36 9.81.65 5.8 5.36 9.19 5 4 11 3.5t11-5.5q11-9 22.5-15.5T345-576q14 0 25.5 6t22.5 15q5 4.36 11 5.18 6 .82 11-3.18 5-3 5.5-9t-3.5-10q-15-14-33.32-23T345-604Zm270 0q-20 0-39 9.5T543-571q-4 4-3.5 10t5.5 9q5 4 11 3.5t11-5.5q11-9 22.5-15.5T615-576q14.03 0 25.52 6.5Q652-563 663-554q5 5 11 5.5t11-3.5q5-3 5.5-9t-3.5-10q-15-14-33.32-23.5T615-604Z"/>
    </Icon>
  );
});

IconMaterialSentimentContentW100Filled.displayName = 'OnesyIconMaterialSentimentContentW100Filled';

export default IconMaterialSentimentContentW100Filled;
