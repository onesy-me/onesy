import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPropaneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PropaneW100'

      short_name='Propane'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm200-160ZM374-668h212v-50H374v50Zm-94 444v-68q-78 0-133-54.76-55-54.77-55-133Q92-558 146.83-613q54.84-55 133.17-55h66v-78h268v78h66q78.33 0 133.17 54.76 54.83 54.77 54.83 133Q868-402 813.17-347 758.33-292 680-292v68h-28v-68H308v68h-28Z"/>
    </Icon>
  );
});

IconMaterialPropaneW100.displayName = 'OnesyIconMaterialPropaneW100';

export default IconMaterialPropaneW100;
