import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoutineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoutineW100Filled'

      short_name='Routine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M434-433q46 46 102 81t119 57q-35 33-80 51t-94 18q-106 0-180-74t-74-180q0-49 18-94t51-80q22 63 57 119t81 102Zm281 52q-7-2-14-4.5t-14-4.5q9-21 14-44t5-46q0-94-66-160t-160-66q-23 0-46 4.5T390-688q-2-7-4-13t-4-13q23-10 48-15t51-5q106 0 180 74t74 180q0 26-5 51t-15 48ZM466-826v-88h28v88h-28Zm0 780v-88h28v88h-28Zm269-669-20-20 60-60 20 20-60 60ZM185-165l-20-20 60-60 20 20-60 60Zm641-301v-28h88v28h-88Zm-780 0v-28h88v28H46Zm729 301-60-60 20-20 60 60-20 20ZM225-715l-60-60 20-20 60 60-20 20Z"/>
    </Icon>
  );
});

IconMaterialRoutineW100Filled.displayName = 'OnesyIconMaterialRoutineW100Filled';

export default IconMaterialRoutineW100Filled;
