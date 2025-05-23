import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitnessTrackerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitnessTrackerW100'

      short_name='FitnessTracker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m404-132-37-126q-16-7-25.5-21.5T332-313v-334q0-19 10-33.5t26-21.5l36-126h152l35 125q17 7 27 21.5t10 34.5v334q0 20-10 34.5T591-257l-35 125H404Zm20-28h111l25-93H398l26 93Zm-34-121h180q13 0 21.5-8.5T600-311v-338q0-13-8.5-21.5T570-679H390q-13 0-21.5 8.5T360-649v338q0 13 8.5 21.5T390-281Zm9-426h160l-24-93H424l-25 93Zm80 454Zm0-454Z"/>
    </Icon>
  );
});

IconMaterialFitnessTrackerW100.displayName = 'OnesyIconMaterialFitnessTrackerW100';

export default IconMaterialFitnessTrackerW100;
