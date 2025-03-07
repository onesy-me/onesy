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
      <path d="M214-226v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-640q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h132v-50q0-12.75 8.63-21.38Q363.25-814 376-814h208q12.75 0 21.38 8.62Q614-796.75 614-784v50h132v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v640q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-66H614v50q0 12.75-8.62 21.37Q596.75-146 584-146H376q-12.75 0-21.37-8.63Q346-163.25 346-176v-50H214Zm0-28h132v-132H214v132Zm0-160h132v-132H214v132Zm0-160h132v-132H214v132Zm400 320h132v-132H614v132Zm0-160h132v-132H614v132Zm0-160h132v-132H614v132ZM374-174h212v-612H374v612Zm0-612h212-212Z"/>
    </Icon>
  );
});

IconMaterialTheatersW100.displayName = 'OnesyIconMaterialTheatersW100';

export default IconMaterialTheatersW100;
