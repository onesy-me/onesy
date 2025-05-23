import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStream = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stream'

      short_name='Stream'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-400q-33 0-56.5-23.5T80-480q0-33 23.5-56.5T160-560q33 0 56.5 23.5T240-480q0 33-23.5 56.5T160-400Zm66 228-56-56 174-174 56 56-174 174Zm120-388L172-734l56-56 174 174-56 56ZM480-80q-33 0-56.5-23.5T400-160q0-33 23.5-56.5T480-240q33 0 56.5 23.5T560-160q0 33-23.5 56.5T480-80Zm0-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Zm134 162-56-58 176-174 56 56-176 176Zm120 386L560-346l56-56 174 174-56 56Zm66-228q-33 0-56.5-23.5T720-480q0-33 23.5-56.5T800-560q33 0 56.5 23.5T880-480q0 33-23.5 56.5T800-400Z"/>
    </Icon>
  );
});

IconMaterialStream.displayName = 'OnesyIconMaterialStream';

export default IconMaterialStream;
