import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBathtubW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathtubW100'

      short_name='Bathtub'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M286-545q-23 0-38.5-15.57T232-598q0-22.69 15.5-38.84Q263-653 286-653t38.5 16.01q15.5 16.02 15.5 38.5 0 22.49-15.5 37.99Q309-545 286-545Zm-54 413q-17 0-28.5-12.5T192-174q-26 0-43-18.21-17-18.22-17-43.79v-130q0-12.75 8.63-21.38Q149.25-396 162-396h70v-31q0-29 20.5-50.5T302-499q18 0 34 8.5t28 22.5l36 43q8 8.29 15.5 15.54T432-396h288v-342q0-25-16.5-43.5T663-800q-11.65 0-22.32 5Q630-790 622-782l-50 51.5q5 17.51 2 34.51Q571-679 562-664l-74-76q14-9.31 30-11.9 16-2.58 32 3.62L600-800q12.6-13.18 28.74-20.59Q644.89-828 663-828q35.79 0 60.39 26.5Q748-775 748-738v342h50q12.75 0 21.38 8.62Q828-378.75 828-366v130q0 25.57-17 43.79Q794-174 768-174q0 17-11.5 29.5T728-132H232Zm-40-70h576q14 0 23-10t9-24v-132H160v132q0 14 9 24t23 10Zm0 0h-32 640-608Z"/>
    </Icon>
  );
});

IconMaterialBathtubW100.displayName = 'OnesyIconMaterialBathtubW100';

export default IconMaterialBathtubW100;
