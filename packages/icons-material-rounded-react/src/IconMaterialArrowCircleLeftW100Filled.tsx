import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowCircleLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleLeftW100Filled'

      short_name='ArrowCircleLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M409-466h191q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H409l81-81q4-3.67 4-9.33 0-5.67-4-9.67t-9.67-4q-5.66 0-9.33 4l-93 93q-9 9-9 21t9 21l93 93q4 4 9.5 3.5t9.5-4.5q4-4 4-9.67 0-5.66-4-9.33l-81-80Zm71.17 334q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleLeftW100Filled.displayName = 'OnesyIconMaterialArrowCircleLeftW100Filled';

export default IconMaterialArrowCircleLeftW100Filled;
