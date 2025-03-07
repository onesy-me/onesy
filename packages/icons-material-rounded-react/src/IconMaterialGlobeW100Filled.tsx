import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlobeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlobeW100Filled'

      short_name='Globe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227v-14q0-7-1-14-2 26-19.5 43T736-448H628q-26.4 0-45.2-18.76-18.8-18.76-18.8-45.1v-31.93H436v-63.87Q436-634 454.8-653q18.8-19 45.2-19h32v-40q0-31 21-47.5t50-16.5q-29-12-59.59-18-30.58-6-63.41-6-134 0-227 93t-93 227v15q0 7 1 15h173q54 0 91 37t37 90.55V-290h-96v109q26 10 55 15.5t59 5.5Z"/>
    </Icon>
  );
});

IconMaterialGlobeW100Filled.displayName = 'OnesyIconMaterialGlobeW100Filled';

export default IconMaterialGlobeW100Filled;
