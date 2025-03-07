import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShutterSpeedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedFilled'

      short_name='ShutterSpeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-840q-17 0-28.5-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H400Zm80 760q-75 0-140.5-28.5T225-186q-49-49-77-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q63 0 120 21t104 59l30-30q11-11 27.5-11.5T790-750q11 11 11.5 27.5T791-694l-29 30q36 47 57 104t21 120q0 74-28 139.5T735-186q-49 49-114.5 77.5T480-80Zm0-80q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Zm35-360h162q11 0 16.5-8.5T695-546q-18-37-49-66.5T580-659q-7-3-14-.5t-11 9.5l-58 100q-6 10 .5 20t17.5 10Zm-87 10 82-142q5-8 .5-17T496-680q-40-3-80 9t-75 35q-6 5-7.5 12t2.5 14l58 100q6 10 17 10t17-10Zm-52 110q11 0 17.5-10t.5-20l-82-142q-5-9-15-9.5t-16 7.5q-23 33-33.5 74.5T242-418q1 8 6.5 13t13.5 5h114Zm87 70q6-10-.5-20T445-360H282q-10 0-15.5 8.5T265-334q18 36 49 65.5t66 46.5q7 3 14 1t11-9l58-100Zm103-40q-6-10-17-10t-17 10l-81 140q-5 9-.5 18.5T466-200q43 2 83-10t70-34q6-5 7.5-12t-2.5-14l-58-100Zm0-80 82 141q5 9 15.5 9.5T680-307q23-34 32.5-74.5T718-463q-1-8-6.5-12.5T698-480H584q-11 0-17.5 10t-.5 20Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedFilled.displayName = 'OnesyIconMaterialShutterSpeedFilled';

export default IconMaterialShutterSpeedFilled;
