import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledFilled'

      short_name='PrintDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M763-84 640-206h80v6q0 33-23.5 56.5T640-120H320q-33 0-56.5-23.5T240-200v-80h-80q-33 0-56.5-23.5T80-360v-160q0-51 35-85.5t85-34.5h6L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84ZM320-200h320v-6L486-360H320v160Zm522-91q-16 9-34 8t-32-15L502-572q-19-19-8.5-43.5T531-640h229q50 0 85 35t35 85v160q0 25-11 42.5T842-291ZM427-680q-16 0-30.5-6T371-703l-69-69q-19-19-8.5-43.5T331-840h309q33 0 56.5 23.5T720-760v40q0 17-11.5 28.5T680-680H427Zm293 220q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledFilled.displayName = 'OnesyIconMaterialPrintDisabledFilled';

export default IconMaterialPrintDisabledFilled;
