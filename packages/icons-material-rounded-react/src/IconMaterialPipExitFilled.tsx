import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPipExitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PipExitFilled'

      short_name='PipExit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-240q0-17 11.5-28.5T120-520h240q33 0 56.5-23.5T440-600v-160q0-17 11.5-28.5T480-800h320q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm360-400q-17 0-28.5 11.5T480-520v160q0 17 11.5 28.5T520-320q17 0 28.5-11.5T560-360v-63l95 95q12 12 28 12t28-12q12-12 12-28.5T711-385l-95-95h64q17 0 28.5-11.5T720-520q0-17-11.5-28.5T680-560H520Zm-400-40q-17 0-28.5-11.5T80-640v-120q0-17 11.5-28.5T120-800h200q17 0 28.5 11.5T360-760v120q0 17-11.5 28.5T320-600H120Z"/>
    </Icon>
  );
});

IconMaterialPipExitFilled.displayName = 'OnesyIconMaterialPipExitFilled';

export default IconMaterialPipExitFilled;
