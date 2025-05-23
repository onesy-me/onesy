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
      <path d="M480-292q47.22 0 87.11-21.5t65.72-58.3q5.17-9.2.67-18.7T618-400H342q-11 0-15.5 9.5t.67 18.7Q353-335 393.3-313.5T480-292ZM356-586l34 34q4 4 9.5 4.5T410-552q5-5 5-10t-5-10l-33-33q-8.8-9-20.9-9-12.1 0-21.1 9l-33 33q-4 4-4.5 9.5t4.79 10.79Q307-547 312-547q5 0 10-5l34-34Zm248 0 34 34q4 4 9.5 4.5T658-552q5-5 5-10t-5-10l-33-33q-8.8-9-20.9-9-12.1 0-21.1 9l-33 33q-4 4-4.5 9.5T550-552q5 5 10 5t10-5l34-34ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialSentimentVerySatisfiedW100Filled.displayName = 'OnesyIconMaterialSentimentVerySatisfiedW100Filled';

export default IconMaterialSentimentVerySatisfiedW100Filled;
