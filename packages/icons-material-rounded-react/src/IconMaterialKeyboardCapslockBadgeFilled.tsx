import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardCapslockBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockBadgeFilled'

      short_name='KeyboardCapslockBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280h320q17 0 28.5-11.5T680-320q0-17-11.5-28.5T640-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm160-304 116 116q11 11 28 11t28-11q11-11 11-28t-11-28L508-668q-12-12-28-12t-28 12L308-524q-11 11-11 28t11 28q11 11 28 11t28-11l116-116ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockBadgeFilled.displayName = 'OnesyIconMaterialKeyboardCapslockBadgeFilled';

export default IconMaterialKeyboardCapslockBadgeFilled;
