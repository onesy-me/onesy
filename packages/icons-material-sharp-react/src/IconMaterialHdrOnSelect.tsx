import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrOnSelect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOnSelect'

      short_name='HdrOnSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-240ZM820-80v-80h-80v-60h80v-80h60v80h80v60h-80v80h-60Zm-300 0v-240h200v156h-36l36 84h-60l-36-80h-44v80h-60Zm60-140h80v-40h-80v40ZM0-80v-240h60v80h80v-80h60v240h-60v-100H60v100H0Zm260 0v-240h170l30 30v180l-30 30H260Zm60-60h80v-120h-80v120Z"/>
    </Icon>
  );
});

IconMaterialHdrOnSelect.displayName = 'OnesyIconMaterialHdrOnSelect';

export default IconMaterialHdrOnSelect;
