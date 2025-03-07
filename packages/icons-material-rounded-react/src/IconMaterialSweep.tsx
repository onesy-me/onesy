import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSweep = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sweep'

      short_name='Sweep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240q-17 0-28.5-11.5T400-280q0-17 11.5-28.5T440-320h160q17 0 28.5 11.5T640-280q0 17-11.5 28.5T600-240H440ZM242-354l338-338q12-12 28-12t28 12q12 12 12 28.5T636-635L270-268q-12 12-28 12t-28-12L43-439q-12-12-11.5-28.5T44-496q12-12 28.5-12t28.5 12l141 142Zm358-46q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480h160q17 0 28.5 11.5T800-440q0 17-11.5 28.5T760-400H600Zm160-160q-17 0-28.5-11.5T720-600q0-17 11.5-28.5T760-640h160q17 0 28.5 11.5T960-600q0 17-11.5 28.5T920-560H760Z"/>
    </Icon>
  );
});

IconMaterialSweep.displayName = 'OnesyIconMaterialSweep';

export default IconMaterialSweep;
