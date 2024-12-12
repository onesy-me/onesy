import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJumpToElementW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JumpToElementW100'

      short_name='JumpToElement'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M462-462v-108h28v80h80v28H462Zm258 0v-28h80v-80h28v108H720ZM462-720v-108h108v28h-80v80h-28Zm338 0v-80h-80v-28h108v108h-28ZM152-132l-20-20 282-282H172v-28h290v290h-28v-242L152-132Z"/>
    </Icon>
  );
});

IconMaterialJumpToElementW100.displayName = 'OnesyIconMaterialJumpToElementW100';

export default IconMaterialJumpToElementW100;
