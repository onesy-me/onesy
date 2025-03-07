import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStrollerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrollerW100'

      short_name='Stroller'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M574-166q-20.62 0-35.31-14.69Q524-195.38 524-216q0-20.63 14.69-35.31Q553.38-266 574-266q20.63 0 35.31 14.69Q624-236.63 624-216q0 20.62-14.69 35.31Q594.63-166 574-166Zm-284 0q-20 0-35-14.69T240-216q0-20.63 15-35.31Q270-266 290-266q22 0 36 14.69 14 14.68 14 35.31 0 20.62-14 35.31Q312-166 290-166Zm39-168h227v-266L329-334Zm-62 28 357-418q17-20 35.5-29t41.5-9q29 0 48.5 19.5t19.5 48.87V-680h-28v-14q0-17.04-11.48-28.52T701-734q-16.5 0-29.25 6.5T648-709l-64 75v328H267Zm150-267L273-717q35-23 73-34t81-11q33 0 64 6t66 19L417-573Zm-2-41 92-108q-20-6-40-9t-40-3q-28 0-55 5.5T319-711l96 97Zm0 0Zm28 147Z"/>
    </Icon>
  );
});

IconMaterialStrollerW100.displayName = 'OnesyIconMaterialStrollerW100';

export default IconMaterialStrollerW100;
