import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNaturePeopleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NaturePeopleW100Filled'

      short_name='NaturePeople'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M184.23-448q-17.23 0-28.73-11.27-11.5-11.26-11.5-28.5 0-17.23 11.27-28.73 11.26-11.5 28.5-11.5 17.23 0 28.73 11.27 11.5 11.26 11.5 28.5 0 17.23-11.27 28.73-11.26 11.5-28.5 11.5ZM156-106v-148h-28v-154h112v154h-28v120h378v-258h-96q-50 0-84-33.5T376-504q0-41 27-74.5t69-51.5q0-63 42-100.5t90-37.5q48 0 90 37.5T736-630q42 18 69 51.5t27 74.5q0 45-34 78.5T714-392h-96v258h200v28H156Z"/>
    </Icon>
  );
});

IconMaterialNaturePeopleW100Filled.displayName = 'OnesyIconMaterialNaturePeopleW100Filled';

export default IconMaterialNaturePeopleW100Filled;
