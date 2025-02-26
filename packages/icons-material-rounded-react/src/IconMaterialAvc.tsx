import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAvc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Avc'

      short_name='Avc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-360h100q17 0 28.5-11.5T780-400v-20q0-13-8.5-21.5T750-450q-12 0-21 9t-9 21h-60v-120h60q0 13 8.5 21.5T750-510q13 0 21.5-8.5T780-540v-20q0-17-11.5-28.5T740-600H640q-17 0-28.5 11.5T600-560v160q0 17 11.5 28.5T640-360ZM120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm0-80h720v-480H120v480Zm0 0v-480 480Zm120-180h60v30q0 13 8.5 21.5T330-360q13 0 21.5-8.5T360-390v-170q0-17-11.5-28.5T320-600H220q-17 0-28.5 11.5T180-560v170q0 13 8.5 21.5T210-360q13 0 21.5-8.5T240-390v-30Zm0-60v-60h60v60h-60Zm240 17-34-116q-3-9-10.5-15t-17.5-6q-14 0-22.5 11.5T391-563l53 182q3 9 10.5 15t17.5 6h16q10 0 17.5-6t10.5-15l53-182q4-14-4.5-25.5T542-600q-10 0-17.5 6T514-579l-34 116Z"/>
    </Icon>
  );
});

IconMaterialAvc.displayName = 'OnesyIconMaterialAvc';

export default IconMaterialAvc;
