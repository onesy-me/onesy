import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFemale = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Female'

      short_name='Female'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-200h-40q-17 0-28.5-11.5T360-240q0-17 11.5-28.5T400-280h40v-84q-79-14-129.5-75.5T260-582q0-91 64.5-154.5T480-800q91 0 155.5 63.5T700-582q0 81-50.5 142.5T520-364v84h40q17 0 28.5 11.5T600-240q0 17-11.5 28.5T560-200h-40v40q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160v-40Zm40-240q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Z"/>
    </Icon>
  );
});

IconMaterialFemale.displayName = 'OnesyIconMaterialFemale';

export default IconMaterialFemale;
