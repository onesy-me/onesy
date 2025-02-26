import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediaOutput = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaOutput'

      short_name='MediaOutput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-520ZM160-160q-33 0-56.5-23.5T80-240v-560q0-33 23.5-56.5T160-880h360q33 0 56.5 23.5T600-800v162q-21 2-41 7.5T520-617v-183H160v560h160v80H160Zm160-121v-39q0-11 .5-21.5T323-363q-19-5-31-21t-12-36q0-25 17.5-42.5T340-480q5 0 10 1t10 3q10-18 22.5-34.5T409-542q-15-9-32.5-13.5T340-560q-58 0-99 41t-41 99q0 54 34.5 92.5T320-281Zm20-339q25 0 42.5-17.5T400-680q0-25-17.5-42.5T340-740q-25 0-42.5 17.5T280-680q0 25 17.5 42.5T340-620ZM520-80h-40q-33 0-56.5-23.5T400-160v-160q0-100 70-170t170-70q100 0 170 70t70 170v160q0 33-23.5 56.5T800-80h-40q-17 0-28.5-11.5T720-120v-120q0-17 11.5-28.5T760-280h60v-40q0-75-52.5-127.5T640-500q-75 0-127.5 52.5T460-320v40h60q17 0 28.5 11.5T560-240v120q0 17-11.5 28.5T520-80Z"/>
    </Icon>
  );
});

IconMaterialMediaOutput.displayName = 'OnesyIconMaterialMediaOutput';

export default IconMaterialMediaOutput;
