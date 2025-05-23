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
      <path d="M480-516q75 0 127 52t58 127q1 7 5.2 12t9.8 5q6 0 10-4.5t4-10.5q-5-88-66-148.5T480-544q-87 0-148 60.5T266-335q0 6 4 10.5t10 4.5q6 0 10-5t5-12q6-75 58-127t127-52Zm-71-153q5-4 5-9.5t-5-9.5q-5-4-11-3.5t-11 4.5q-18 14-37.5 26T308-641q-5.78 2.4-9.39 7.2Q295-629 296-623.15q1 5.85 6 9 5 3.15 11 1.15 27-8 51-22.5t45-33.5Zm142 0q20.91 18.94 45.45 32.47Q621-623 647-614q5 2 10.5-.5t6.5-8.5q1-6-2.5-11.5T652-642q-21.81-7.78-41.91-18.89Q590-672 573-687q-5-4-11-4.5t-11 3.5q-5 4-5 9.5t5 9.5Zm-70.83 537q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialSentimentSadW100Filled.displayName = 'OnesyIconMaterialSentimentSadW100Filled';

export default IconMaterialSentimentSadW100Filled;
