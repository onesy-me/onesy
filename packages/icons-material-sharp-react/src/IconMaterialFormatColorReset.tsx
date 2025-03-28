import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatColorReset = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorReset'

      short_name='FormatColorReset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-436q0 36-8 69t-22 63l-62-60q6-17 9-34.5t3-37.5q0-47-17.5-89T650-600L480-768l-88 86-56-56 144-142 226 222q44 42 69 99.5T800-436Zm-8 380L668-180q-41 29-88 44.5T480-120q-133 0-226.5-92.5T160-436q0-51 16-98t48-90L56-792l56-56 736 736-56 56ZM480-200q36 0 68.5-10t61.5-28L280-566q-21 32-30.5 64t-9.5 66q0 98 70 167t170 69Zm-37-204Zm110-116Z"/>
    </Icon>
  );
});

IconMaterialFormatColorReset.displayName = 'OnesyIconMaterialFormatColorReset';

export default IconMaterialFormatColorReset;
