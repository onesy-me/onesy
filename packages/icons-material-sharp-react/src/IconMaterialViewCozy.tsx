import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCozy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCozy'

      short_name='ViewCozy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-540v-300h300v300H120Zm80-80h140v-140H200v140Zm-80 500v-300h300v300H120Zm80-80h140v-140H200v140Zm340-340v-300h300v300H540Zm80-80h140v-140H620v140Zm-80 500v-300h300v300H540Zm80-80h140v-140H620v140ZM340-620Zm0 280Zm280-280Zm0 280Z"/>
    </Icon>
  );
});

IconMaterialViewCozy.displayName = 'OnesyIconMaterialViewCozy';

export default IconMaterialViewCozy;
