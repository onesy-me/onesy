import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStrollerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrollerW100Filled'

      short_name='Stroller'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M574-166q-20.62 0-35.31-14.69Q524-195.38 524-216q0-20.63 14.69-35.31Q553.38-266 574-266q20.63 0 35.31 14.69Q624-236.63 624-216q0 20.62-14.69 35.31Q594.63-166 574-166Zm-284 0q-20 0-35-14.69T240-216q0-20.63 15-35.31Q270-266 290-266q22 0 36 14.69 14 14.68 14 35.31 0 20.62-14 35.31Q312-166 290-166Zm7-140q-8.85 0-12.43-8-3.57-8 2.43-15l337-395q17-20 35.5-29t41.5-9q29 0 48.5 19.5t19.5 48.97v.53q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-.75q0-17.14-11.48-28.7Q718.04-734 701-734q-16.5 0-29.25 6.5T648-709l-64 75v267.69q0 25.31-17.61 42.81-17.61 17.5-42.34 17.5H297Zm120-267L296-694q-9-9-7.12-20.86Q290.75-726.72 302-733q29-14 59.5-21.5T427-762q33 0 64 6t66 19L417-573Z"/>
    </Icon>
  );
});

IconMaterialStrollerW100Filled.displayName = 'OnesyIconMaterialStrollerW100Filled';

export default IconMaterialStrollerW100Filled;
