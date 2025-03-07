import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTornado = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tornado'

      short_name='Tornado'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M179-840h602q47 0 69.5 40t-.5 80L549-200q-23 40-69 40t-69-40L110-720q-23-40-.5-80t69.5-40Zm0 80 69 120h464l69-120H179Zm116 200 69 120h232l69-120H295Zm116 200 69 120 69-120H411Z"/>
    </Icon>
  );
});

IconMaterialTornado.displayName = 'OnesyIconMaterialTornado';

export default IconMaterialTornado;
