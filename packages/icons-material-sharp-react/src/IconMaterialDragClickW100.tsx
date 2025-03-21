import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDragClickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragClickW100'

      short_name='DragClick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-292q-71 0-123-45.5T294-452l31 9q12.92 54 55.64 88.5Q423.37-320 480-320q66 0 113-47t47-113q0-57-35-100t-88-56l-10-30q69 11 115 63t46 123q0 78.33-54.83 133.17Q558.33-292 480-292Zm.17 160q-72.17 0-135.73-27.4-63.56-27.41-110.57-74.39-47.02-46.98-74.44-110.49Q132-407.79 132-480v-10q0-5 1-10l27 8v12q0 134 93 227t227 93q134 0 227-93t93-227q0-134-93-227t-227-93h-12l-9-27q5.25-1 10.5-1H480q72.21 0 135.72 27.39 63.51 27.39 110.49 74.35 46.98 46.96 74.38 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM433-497 235-696l-33 100-70-232 232 70-100 33 199 198-30 30Z"/>
    </Icon>
  );
});

IconMaterialDragClickW100.displayName = 'OnesyIconMaterialDragClickW100';

export default IconMaterialDragClickW100;
