import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatColorFill = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorFill'

      short_name='FormatColorFill'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m247-904 57-56 400 400-304 304L96-560l247-248-96-96Zm153 153L209-560h382L400-751Zm360 471q-33 0-56.5-23.5T680-360q0-21 12.5-45t27.5-45q9-12 19-25t21-25q11 12 21 25t19 25q15 21 27.5 45t12.5 45q0 33-23.5 56.5T760-280ZM80 0v-160h800V0H80Z"/>
    </Icon>
  );
});

IconMaterialFormatColorFill.displayName = 'OnesyIconMaterialFormatColorFill';

export default IconMaterialFormatColorFill;
