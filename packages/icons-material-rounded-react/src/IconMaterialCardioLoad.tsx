import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardioLoad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardioLoad'

      short_name='CardioLoad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m427-167-75-67q-72-65-123.5-116t-85-96q-33.5-45-49-87T79-621q0-94 63-156.5T299-840q52 0 99 22t82 62q35-40 82-62t99-22q94 0 157 62.5T881-621q0 46-15.5 88t-49 87q-33.5 45-85 96T608-234l-75 67q-11 11-25 15.5t-28 4.5q-14 0-28-4.5T427-167ZM171-560h618q6-16 9-31t3-30q0-60-41.5-99.5T661-760q-42 0-78 22t-65 59q-7 9-17 14t-21 5q-11 0-21-5t-17-14q-29-37-65-59t-78-22q-57 0-98.5 39.5T159-621q0 15 3 30t9 31Zm102 140h414q16-17 29-31.5t24-28.5H220q11 14 24 28.5t29 31.5Zm207 192q36-32 67.5-59.5T605-340H355q26 25 57.5 52.5T480-228Zm0-332Z"/>
    </Icon>
  );
});

IconMaterialCardioLoad.displayName = 'OnesyIconMaterialCardioLoad';

export default IconMaterialCardioLoad;
