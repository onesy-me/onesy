import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpansionPanels = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpansionPanels'

      short_name='ExpansionPanels'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-354-75-75q-12-12-28-12t-28 12q-12 12-12 28.5t12 28.5l103 104q12 12 28 12t28-12l104-104q12-12 12-28.5T612-429q-12-12-28.5-12T555-429l-75 75Zm0-252 75 75q12 12 28 12t28-12q12-12 12-28.5T611-588L508-692q-12-12-28-12t-28 12L348-588q-12 12-11.5 28t12.5 28q12 12 28.5 12t28.5-12l74-74ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialExpansionPanels.displayName = 'OnesyIconMaterialExpansionPanels';

export default IconMaterialExpansionPanels;
