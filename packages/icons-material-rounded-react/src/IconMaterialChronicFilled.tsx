import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChronicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChronicFilled'

      short_name='Chronic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-536v-144q0-17-11.5-28.5T440-720q-17 0-28.5 11.5T400-680v160q0 8 3 15t9 13l80 80q12 12 28 12t28-12q12-12 12-28t-12-28l-68-68ZM363-168q-122-26-202.5-124T80-520q0-150 105-255t255-105q150 0 255 105t105 255q0 43-10 83.5T762-360H518q-66 0-112 47t-46 113q0 8 .5 16t2.5 16Zm157 48h240q33 0 56.5-23.5T840-200q0-33-23.5-56.5T760-280H520q-33 0-56.5 23.5T440-200q0 33 23.5 56.5T520-120Zm0-40q-17 0-28.5-11.5T480-200q0-17 11.5-28.5T520-240q17 0 28.5 11.5T560-200q0 17-11.5 28.5T520-160Zm120 0q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240q17 0 28.5 11.5T680-200q0 17-11.5 28.5T640-160Zm120 0q-17 0-28.5-11.5T720-200q0-17 11.5-28.5T760-240q17 0 28.5 11.5T800-200q0 17-11.5 28.5T760-160Z"/>
    </Icon>
  );
});

IconMaterialChronicFilled.displayName = 'OnesyIconMaterialChronicFilled';

export default IconMaterialChronicFilled;
