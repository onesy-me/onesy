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
      <path d="M424-494h112v-296q0-23-16.5-39.5T480-846q-23 0-39.5 16.5T424-790v296ZM194-354h572v-80q0-14-9-23t-23-9H226q-14 0-23 9t-9 23v80Zm-24 240h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h162v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h162v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q16 0 26-12.5t5-27.5l-52-172H191l-52 172q-5 15 5 27.5t26 12.5Zm628 28H162q-26 0-43-21t-9-47l56-183v-103q0-23 15.5-38.5T220-494h176v-296q0-35 24.5-59.5T480-874q35 0 59.5 24.5T564-790v296h176q23 0 38.5 15.5T794-440v103l56 185q8 25-9 45.5T798-86Zm-32-380H194h572Zm-230-28H424h112Z"/>
    </Icon>
  );
});

IconMaterialMopW100.displayName = 'OnesyIconMaterialMopW100';

export default IconMaterialMopW100;
