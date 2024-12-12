import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTheatersW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TheatersW100'

      short_name='Theaters'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-146v-668h28v80h132v-80h268v80h132v-80h28v668h-28v-80H614v80H346v-80H214v80h-28Zm28-108h132v-132H214v132Zm0-160h132v-132H214v132Zm0-160h132v-132H214v132Zm400 320h132v-132H614v132Zm0-160h132v-132H614v132Zm0-160h132v-132H614v132ZM374-174h212v-612H374v612Zm0-612h212-212Z"/>
    </Icon>
  );
});

IconMaterialTheatersW100.displayName = 'OnesyIconMaterialTheatersW100';

export default IconMaterialTheatersW100;
