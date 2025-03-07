import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCadenceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CadenceFilled'

      short_name='Cadence'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-680q17 0 28.5 11.5T520-640v480q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160v-480q0-17 11.5-28.5T480-680ZM320-560q17 0 28.5 11.5T360-520v240q0 17-11.5 28.5T320-240q-17 0-28.5-11.5T280-280v-240q0-17 11.5-28.5T320-560Zm320 0q17 0 28.5 11.5T680-520v240q0 17-11.5 28.5T640-240q-17 0-28.5-11.5T600-280v-240q0-17 11.5-28.5T640-560ZM480-760q-45 0-84.5 22.5T333-676q-32 54-87.5 85T127-560h-7q-17 0-28.5-11.5T80-600q0-17 11.5-28.5T120-640h7q42 0 78.5-21t58.5-57q34-57 91.5-89.5T480-840q67 0 124.5 32.5T696-718q22 36 58.5 57t78.5 21h7q17 0 28.5 11.5T880-600q0 17-11.5 28.5T840-560h-6q-63 0-118.5-31T628-676q-23-39-62.5-61.5T480-760ZM160-360q-17 0-28.5-11.5T120-400q0-17 11.5-28.5T160-440q17 0 28.5 11.5T200-400q0 17-11.5 28.5T160-360Zm640 0q-17 0-28.5-11.5T760-400q0-17 11.5-28.5T800-440q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360Z"/>
    </Icon>
  );
});

IconMaterialCadenceFilled.displayName = 'OnesyIconMaterialCadenceFilled';

export default IconMaterialCadenceFilled;
