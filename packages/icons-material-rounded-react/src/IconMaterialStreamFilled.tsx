import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStreamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreamFilled'

      short_name='Stream'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-400q-33 0-56.5-23.5T80-480q0-33 23.5-56.5T160-560q33 0 56.5 23.5T240-480q0 33-23.5 56.5T160-400Zm38 144 118-118q11-11 28-11t28 11q11 11 11 28t-11 28L254-200q-11 11-28 11t-28-11q-11-11-11-28t11-28Zm120-332L200-706q-11-11-11-28t11-28q11-11 28-11t28 11l118 118q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM480-80q-33 0-56.5-23.5T400-160q0-33 23.5-56.5T480-240q33 0 56.5 23.5T560-160q0 33-23.5 56.5T480-80Zm0-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Zm106 76 120-118q11-11 27.5-11.5T762-762q11 11 11 28t-11 28L643-587q-12 12-28.5 12T586-587q-11-12-11.5-28.5T586-644Zm120 444L588-318q-11-11-11-28t11-28q11-11 28-11t28 11l118 118q11 11 11 28t-11 28q-11 11-28 11t-28-11Zm94-200q-33 0-56.5-23.5T720-480q0-33 23.5-56.5T800-560q33 0 56.5 23.5T880-480q0 33-23.5 56.5T800-400Z"/>
    </Icon>
  );
});

IconMaterialStreamFilled.displayName = 'OnesyIconMaterialStreamFilled';

export default IconMaterialStreamFilled;
