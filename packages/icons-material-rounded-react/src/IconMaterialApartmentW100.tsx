import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApartmentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApartmentW100'

      short_name='Apartment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M176-164q-13 0-21.5-8.5T146-194v-448q0-13 8.5-21.5T176-672h130v-130q0-13 8.5-21.5T336-832h288q13 0 21.5 8.5T654-802v290h130q13 0 21.5 8.5T814-482v288q0 13-8.5 21.5T784-164H546v-160H414v160H176Zm-2-28h132v-132H174v132Zm0-160h132v-132H174v132Zm0-160h132v-132H174v132Zm160 160h132v-132H334v132Zm0-160h132v-132H334v132Zm0-160h132v-132H334v132Zm160 320h132v-132H494v132Zm0-160h132v-132H494v132Zm0-160h132v-132H494v132Zm160 480h132v-132H654v132Zm0-160h132v-132H654v132Z"/>
    </Icon>
  );
});

IconMaterialApartmentW100.displayName = 'OnesyIconMaterialApartmentW100';

export default IconMaterialApartmentW100;
