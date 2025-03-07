import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSafetyDivider = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyDivider'

      short_name='SafetyDivider'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200q-17 0-28.5-11.5T440-240v-480q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v480q0 17-11.5 28.5T480-200ZM40-320v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H40Zm560 0v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H600ZM200-480q-33 0-56.5-23.5T120-560q0-33 23.5-56.5T200-640q33 0 56.5 23.5T280-560q0 33-23.5 56.5T200-480Zm560 0q-33 0-56.5-23.5T680-560q0-33 23.5-56.5T760-640q33 0 56.5 23.5T840-560q0 33-23.5 56.5T760-480Z"/>
    </Icon>
  );
});

IconMaterialSafetyDivider.displayName = 'OnesyIconMaterialSafetyDivider';

export default IconMaterialSafetyDivider;
