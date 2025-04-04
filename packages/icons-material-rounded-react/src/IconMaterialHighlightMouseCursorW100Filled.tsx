import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighlightMouseCursorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightMouseCursorW100Filled'

      short_name='HighlightMouseCursor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M766-164 583-348l-18 55q-4 11-15 11t-14-11l-48-160q-2-8 4.5-14.5T507-472l160 48q11 3 11 14t-11 15l-55 18 184 183q6 6 6 15t-6 15q-6 6-15 6t-15-6ZM480-800q-134 0-227 93t-93 227q0 136 92 228t226 92q6 0 10 4t4 10q0 6-4 10.5t-10 4.5q-74 0-137-29t-109.5-77q-46.5-48-73-111T132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q138 0 243 98.5T829-483q0 6-4 10.5t-10 4.5q-6 0-10.5-4.5T800-483q0-128-94.5-222.5T480-800Z"/>
    </Icon>
  );
});

IconMaterialHighlightMouseCursorW100Filled.displayName = 'OnesyIconMaterialHighlightMouseCursorW100Filled';

export default IconMaterialHighlightMouseCursorW100Filled;
