import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewComfyAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyAlt'

      short_name='ViewComfyAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-560H160q-33 0-56.5-23.5T80-640v-160q0-33 23.5-56.5T160-880h160q33 0 56.5 23.5T400-800v160q0 33-23.5 56.5T320-560Zm-160-80h160v-160H160v160ZM320-80H160q-33 0-56.5-23.5T80-160v-160q0-33 23.5-56.5T160-400h160q33 0 56.5 23.5T400-320v160q0 33-23.5 56.5T320-80Zm-160-80h160v-160H160v160Zm640-400H640q-33 0-56.5-23.5T560-640v-160q0-33 23.5-56.5T640-880h160q33 0 56.5 23.5T880-800v160q0 33-23.5 56.5T800-560Zm-160-80h160v-160H640v160ZM800-80H640q-33 0-56.5-23.5T560-160v-160q0-33 23.5-56.5T640-400h160q33 0 56.5 23.5T880-320v160q0 33-23.5 56.5T800-80Zm-160-80h160v-160H640v160ZM320-640Zm0 320Zm320-320Zm0 320Z"/>
    </Icon>
  );
});

IconMaterialViewComfyAlt.displayName = 'OnesyIconMaterialViewComfyAlt';

export default IconMaterialViewComfyAlt;
