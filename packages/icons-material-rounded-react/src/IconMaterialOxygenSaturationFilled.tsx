import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOxygenSaturationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OxygenSaturationFilled'

      short_name='OxygenSaturation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-440q-66 0-113-47t-47-113q0-66 47-113t113-47h40v-120q0-17 11.5-28.5T360-920h240q17 0 28.5 11.5T640-880v120h40q66 0 113 47t47 113q0 66-47 113t-113 47h-93q11-11 19.5-24.5T620-493q3-10 11-17t18-9q16-4 24.5-18t4.5-30q-4-16-18-25t-30-5q-30 8-53 28.5T544-518q-5 17-20 27.5T491-480h-22q-18 0-33-10.5T416-518q-10-30-33-50.5T330-597q-16-4-30 5t-18 25q-4 16 4.5 30t24.5 18q10 2 18 9t11 17q5 15 13.5 28.5T373-440h-93Zm40 360q-21 0-39.5-10.5T251-120h-91q-50 0-85-35t-35-85v-120q0-17 11.5-28.5T80-400q17 0 28.5 11.5T120-360v120q0 17 11.5 28.5T160-200h91q11-19 29.5-29.5T320-240h40v-40q0-17 11.5-28.5T400-320q17 0 28.5 11.5T440-280v40h80v-40q0-17 11.5-28.5T560-320q17 0 28.5 11.5T600-280v40h40q21 0 39.5 10.5T709-200h91q17 0 28.5-11.5T840-240v-120q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v120q0 50-35 85t-85 35h-91q-11 19-29.5 29.5T640-80H320Z"/>
    </Icon>
  );
});

IconMaterialOxygenSaturationFilled.displayName = 'OnesyIconMaterialOxygenSaturationFilled';

export default IconMaterialOxygenSaturationFilled;
