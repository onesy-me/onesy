import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanToolAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAltW100'

      short_name='PanToolAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-172 132-470l35-29 165 99v-429h28v480L174-463l220 263h366v-400h28v428H380Zm95-320v-228h28v228h-28Zm143 0v-178h28v178h-28Zm-60 146Z"/>
    </Icon>
  );
});

IconMaterialPanToolAltW100.displayName = 'OnesyIconMaterialPanToolAltW100';

export default IconMaterialPanToolAltW100;
