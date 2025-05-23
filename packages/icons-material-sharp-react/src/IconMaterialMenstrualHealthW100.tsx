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
      <path d="M480-804q42 51 77.5 102T622-601l206-155v276q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480v-276l206 155q29-49 64.5-100.5T480-804ZM160-700v220q0 86 40.5 157T309-209q-26-30-41.5-68.5T252-360q0-42 18.5-97.5T324-577L160-700Zm320-60q-91 109-145.5 218.5T280-360q0 83 58.5 141.5T480-160q83 0 141.5-58.5T680-360q0-72-54.5-181.5T480-760Zm320 60L636-577q35 64 53.5 119.5T708-360q0 44-15.5 82.5T651-209q68-43 108.5-114T800-480v-220Z"/>
    </Icon>
  );
});

IconMaterialMenstrualHealthW100.displayName = 'OnesyIconMaterialMenstrualHealthW100';

export default IconMaterialMenstrualHealthW100;
