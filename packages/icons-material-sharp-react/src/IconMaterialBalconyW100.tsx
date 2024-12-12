import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBalconyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalconyW100'

      short_name='Balcony'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-492v-56h56v56h-56Zm240 0v-56h56v56h-56ZM172-132v-246h40v-182q0-56 21-104.5t57.41-85.01q36.41-36.52 85.38-57.5Q424.76-828 480-828q56 0 104.5 21t85 57.5q36.5 36.5 57.5 85T748-560v182h40v246H172Zm28-28h106v-190H200v190Zm134 0h132v-190H334v190Zm-94-218h226v-421q-85 2-155.5 68.5T240-560v182Zm254 0h226v-182q0-104-70.5-170.5T494-799v421Zm0 218h132v-190H494v190Zm160 0h106v-190H654v190Z"/>
    </Icon>
  );
});

IconMaterialBalconyW100.displayName = 'OnesyIconMaterialBalconyW100';

export default IconMaterialBalconyW100;
