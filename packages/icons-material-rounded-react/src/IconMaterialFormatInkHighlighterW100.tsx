import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatInkHighlighterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatInkHighlighterW100'

      short_name='FormatInkHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M108 0Q97 0 88.5-8T80-28q0-11 8.5-19.5T108-56h744q11 0 19.5 8t8.5 20q0 11-8.5 19.5T852 0H108Zm445-465L449-569 295-415q-9 9-9 22t9 22l60 60q9 9 22 9t22-9l154-154Zm-84-124 104 104 188-188q9-9 9-23t-9-23l-58-58q-9-9-23-9t-23 9L469-589Zm-30-10 144 144-164 164q-18 18-42 18t-42-18l-10-10-34 34q-8 8-19.5 13t-23.5 5h-23q-10 0-13.5-9.5T215-275l68-68-8-8q-18-18-18-42t18-42l164-164Zm0 0 199-199q18-18 42-18t42 18l60 60q18 18 18 42t-18 42L583-455 439-599Z"/>
    </Icon>
  );
});

IconMaterialFormatInkHighlighterW100.displayName = 'OnesyIconMaterialFormatInkHighlighterW100';

export default IconMaterialFormatInkHighlighterW100;
