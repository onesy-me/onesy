import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeakRemove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeakRemove'

      short_name='LeakRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M762-85 654-194q-3 8-5.5 17t-4.5 18q-4 17-16 28t-28 11q-17 0-28-12t-9-28q4-26 11.5-49t19.5-45l-58-58q-22 34-35.5 72T482-160q-2 17-13.5 28.5T440-120q-17 0-28.5-12t-9.5-28q5-58 24.5-110.5T478-370L370-478q-47 31-99.5 51T160-402q-16 2-28-9.5T120-440q0-16 11.5-28t28.5-14q42-5 80-18.5t72-35.5l-58-58q-22 12-45 19.5T160-563q-16 2-28-9t-12-28q0-15 11-27.5t28-16.5q8-2 16.5-4.5T192-654L84-764q-11-11-11.5-27.5T84-820q11-11 28-11t28 11l679 679q12 12 11.5 28.5T818-84q-12 11-28 11t-28-12ZM360-840q17 0 28 12t9 28q-4 25-11.5 48.5T366-708l-60-60q3-8 5.5-16.5T316-801q4-17 16-28t28-11Zm160 0q17 0 28.5 12t9.5 28q-5 58-24.5 110.5T482-592l-58-58q22-33 35.5-70.5T478-800q2-17 13.5-28.5T520-840Zm320 320q0 16-11.5 28T800-478q-42 5-80 18.5T648-424l-58-58q47-32 99.5-51.5T800-558q16-2 28 9.5t12 28.5Zm-72 214-62-60q22-12 45-19.5t49-11.5q16-2 28 9t12 28q0 15-11 27.5T801-316q-8 2-16.5 4t-16.5 6Z"/>
    </Icon>
  );
});

IconMaterialLeakRemove.displayName = 'OnesyIconMaterialLeakRemove';

export default IconMaterialLeakRemove;
