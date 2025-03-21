import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatInkHighlighterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatInkHighlighterW100Filled'

      short_name='FormatInkHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M108 0Q97 0 88.5-8T80-28q0-11 8.5-19.5T108-56h744q11 0 19.5 8t8.5 20q0 11-8.5 19.5T852 0H108Zm321-589 144 144-154 154q-18 18-42 18t-42-18l-10-10-34 34q-8 8-19.5 13t-23.5 5h-23q-10 0-13.5-9.5T215-275l68-68-8-8q-18-18-18-42t18-42l154-154Zm20-20 189-189q18-18 42-18t42 18l60 60q18 18 18 42t-18 42L593-465 449-609Z"/>
    </Icon>
  );
});

IconMaterialFormatInkHighlighterW100Filled.displayName = 'OnesyIconMaterialFormatInkHighlighterW100Filled';

export default IconMaterialFormatInkHighlighterW100Filled;
