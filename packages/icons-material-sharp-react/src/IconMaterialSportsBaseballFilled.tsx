import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsBaseballFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBaseballFilled'

      short_name='SportsBaseball'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M167-231q-42-54-64.5-117.5T80-480q0-68 22.5-131.5T167-729q58 45 91 110.5T291-480q0 73-33 138.5T167-231ZM480-80q-72 0-137.5-24T223-174q69-57 108-136.5T370-480q0-90-39-169.5T223-786q54-46 119.5-70T480-880q72 0 137.5 24T737-786q-69 57-108 136.5T590-480q0 90 39 169.5T737-174q-54 46-119.5 70T480-80Zm313-151q-58-45-91-110.5T669-480q0-73 33-138.5T793-729q42 54 64.5 117.5T880-480q0 68-22.5 131.5T793-231Z"/>
    </Icon>
  );
});

IconMaterialSportsBaseballFilled.displayName = 'OnesyIconMaterialSportsBaseballFilled';

export default IconMaterialSportsBaseballFilled;
