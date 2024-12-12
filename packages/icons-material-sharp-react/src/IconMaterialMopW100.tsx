import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MopW100'

      short_name='Mop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-494h112v-296q0-23-16.5-39.5T480-846q-23 0-39.5 16.5T424-790v296ZM194-354h572v-112H194v112Zm-67 240h149v-120h28v120h162v-120h28v120h162v-120h28v120h149l-64-212H191l-64 212ZM89-86l77-251v-157h230v-296q0-35 24.5-59.5T480-874q35 0 59.5 24.5T564-790v296h230v157l76 251H89Zm677-380H194h572Zm-230-28H424h112Z"/>
    </Icon>
  );
});

IconMaterialMopW100.displayName = 'OnesyIconMaterialMopW100';

export default IconMaterialMopW100;
