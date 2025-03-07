import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAv1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Av1'

      short_name='Av1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm0-80h720v-480H120v480Zm0 0v-480 480Zm120-180h60v30q0 13 8.5 21.5T330-360q13 0 21.5-8.5T360-390v-170q0-17-11.5-28.5T320-600H220q-17 0-28.5 11.5T180-560v170q0 13 8.5 21.5T210-360q13 0 21.5-8.5T240-390v-30Zm0-60v-60h60v60h-60Zm260 17-34-116q-3-9-10.5-15t-17.5-6q-14 0-22.5 11.5T411-563l53 182q3 9 10.5 15t17.5 6h16q10 0 17.5-6t10.5-15l53-182q4-14-4.5-25.5T562-600q-10 0-17.5 6T534-579l-34 116Zm220-77v150q0 13 8.5 21.5T750-360q13 0 21.5-8.5T780-390v-180q0-13-8.5-21.5T750-600h-60q-13 0-21.5 8.5T660-570q0 13 8.5 21.5T690-540h30Z"/>
    </Icon>
  );
});

IconMaterialAv1.displayName = 'OnesyIconMaterialAv1';

export default IconMaterialAv1;
