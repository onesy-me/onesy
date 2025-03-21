import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBalconyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalconyW100Filled'

      short_name='Balcony'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-492q-11 0-19.5-8.5T332-520q0-11 8.5-19.5T360-548q11 0 19.5 8.5T388-520q0 11-8.5 19.5T360-492Zm240 0q-11 0-19.5-8.5T572-520q0-11 8.5-19.5T600-548q11 0 19.5 8.5T628-520q0 11-8.5 19.5T600-492ZM232-132q-25 0-42.5-17.5T172-192v-158q0-12 8-20t20-8h12v-182q0-56 21-104.5t57.5-85Q327-786 376-807t104-21q56 0 104.5 21t85 57.5q36.5 36.5 57.5 85T748-560v182h11q12 0 20.5 8t8.5 20v158q0 25-17.5 42.5T728-132H232Zm-32-218v158q0 14 9 23t23 9h74v-190H200Zm134 190h132v-190H334v190Zm-94-218h226v-421q-85 2-155.5 68.5T240-560v182Zm254 0h226v-182q0-104-70.5-170.5T494-799v421Zm0 218h132v-190H494v190Zm160 0h74q14 0 23-9t9-23v-158H654v190Z"/>
    </Icon>
  );
});

IconMaterialBalconyW100Filled.displayName = 'OnesyIconMaterialBalconyW100Filled';

export default IconMaterialBalconyW100Filled;
