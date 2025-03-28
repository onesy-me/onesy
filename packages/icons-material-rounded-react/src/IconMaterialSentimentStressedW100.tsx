import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentStressedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentStressedW100'

      short_name='SentimentStressed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-360 49 49q5 5 11 5t11-5l49-49 29 29q4 4 9.5 4.5T649-331q5-5 5-10t-5-10l-38-38q-5-5-11-5t-11 5l-49 49-49-49q-5-5-11-5t-11 5l-49 49-49-49q-5-5-11-5t-11 5l-38 38q-4 4-4.5 9.5T311-331q5 5 10 5t10-5l29-29 49 49q5 5 11 5t11-5l49-49ZM376-560l-70 51q-5 3-5.5 8.5T303-490q3 5 9 6.5t11-2.5l84-62q6-5 6-12t-6-12l-85-62q-5-4-10-2.5t-9 6.5q-3 5-2.5 10.5t5.5 8.5l70 51Zm208 0 70-51q5-3 5.5-8.5T657-630q-3-5-9-6.5t-11 2.5l-84 62q-6 5-6 12t6 12l85 62q5 4 10 2.5t9-6.5q3-5 2.5-10.5T654-509l-70-51ZM480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132Zm0-348Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialSentimentStressedW100.displayName = 'OnesyIconMaterialSentimentStressedW100';

export default IconMaterialSentimentStressedW100;
