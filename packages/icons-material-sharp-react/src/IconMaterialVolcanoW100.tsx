import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolcanoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoW100'

      short_name='Volcano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m160-132 114-256h121l80-200h206l130 456H160Zm43-28h571L660-560H494l-80 200H292l-89 200Zm363-586v-108h28v108h-28Zm155 64-19-19 76-76 20 19-77 76Zm-282 0-76-76 19-20 76 77-19 19Zm335 522H203h571Z"/>
    </Icon>
  );
});

IconMaterialVolcanoW100.displayName = 'OnesyIconMaterialVolcanoW100';

export default IconMaterialVolcanoW100;
