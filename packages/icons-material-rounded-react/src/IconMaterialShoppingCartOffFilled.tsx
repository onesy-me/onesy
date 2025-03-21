import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingCartOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartOffFilled'

      short_name='ShoppingCartOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M633-440 273-800h525q23 0 35.5 19.5t.5 42.5L692-482q-11 20-28.5 31T633-440ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm512 24L566-280H304q-44 0-67-37.5t-3-78.5l42-86-72-162L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11.5 27.5T848-56q-11 11-28 11t-28-11ZM680-80q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartOffFilled.displayName = 'OnesyIconMaterialShoppingCartOffFilled';

export default IconMaterialShoppingCartOffFilled;
