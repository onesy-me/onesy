import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroceryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroceryW100Filled'

      short_name='Grocery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640.24-132Q562-132 507-186.76q-55-54.77-55-133Q452-398 506.76-453q54.77-55 133-55Q718-508 773-453.24q55 54.77 55 133Q828-242 773.24-187q-54.77 55-133 55Zm-.24-28q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm-508-52v-342l102-226h-64v-48h260v48h-64l110 248q-5 3-10.5 8T454-513L336-780h-72L160-547v307h224q2 8 5 15t6 13H132Zm508-356q-21-9-34.5-27.5T592-638q0-24 13.5-42.5T640-708v140q9-21 27.5-34.5T710-616q24 0 42.5 13.5T780-568H640Z"/>
    </Icon>
  );
});

IconMaterialGroceryW100Filled.displayName = 'OnesyIconMaterialGroceryW100Filled';

export default IconMaterialGroceryW100Filled;
