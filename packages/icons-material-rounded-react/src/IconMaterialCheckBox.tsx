import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckBox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBox'

      short_name='CheckBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m424-424-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-424ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialCheckBox.displayName = 'OnesyIconMaterialCheckBox';

export default IconMaterialCheckBox;
