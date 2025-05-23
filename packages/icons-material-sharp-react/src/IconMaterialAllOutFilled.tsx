import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllOutFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOutFilled'

      short_name='AllOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640Zm-160-80q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z"/>
    </Icon>
  );
});

IconMaterialAllOutFilled.displayName = 'OnesyIconMaterialAllOutFilled';

export default IconMaterialAllOutFilled;
