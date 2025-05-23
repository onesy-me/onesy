import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMenstrualHealthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenstrualHealthW100'

      short_name='MenstrualHealth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480v-216q0-19 16.5-27t31.5 3l158 119q24-41 52.5-83.5T453-770q11-14 27-13.5t27 13.5q33 43 62 85t53 84l158-119q15-11 31.5-3t16.5 27v216q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132ZM252-360q0-42 18.5-97.5T324-577L160-700v220q0 86 40.5 157T309-209q-26-30-41.5-68.5T252-360Zm228 200q83 0 141.5-58.5T680-360q0-72-54.5-181.5T480-760q-91 109-145.5 218.5T280-360q0 83 58.5 141.5T480-160Zm228-200q0 44-15.5 82.5T651-209q68-43 108.5-114T800-480v-220L636-577q35 64 53.5 119.5T708-360Z"/>
    </Icon>
  );
});

IconMaterialMenstrualHealthW100.displayName = 'OnesyIconMaterialMenstrualHealthW100';

export default IconMaterialMenstrualHealthW100;
