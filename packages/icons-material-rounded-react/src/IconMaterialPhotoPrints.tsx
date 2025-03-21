import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoPrints = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoPrints'

      short_name='PhotoPrints'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M581-400q34 0 63-12.5t52-34.5q18-17 31-39.5t18-48.5q2-10-4.5-17.5T724-558q-26 4-49.5 16T633-513q-23 22-36.5 51T581-400Zm0 0q-2-33-15.5-62T529-513q-18-17-41.5-29T438-558q-10-2-16.5 5.5T417-535q5 26 18 48.5t31 39.5q23 22 52 34.5t63 12.5Zm0-120q17 0 28.5-11.5T621-560v-10l10 4q15 6 30.5 3t23.5-17q9-15 6-32t-20-24l-10-4 10-4q17-7 19.5-24.5T685-700q-9-15-24-17.5t-30 3.5l-10 4v-10q0-17-11.5-28.5T581-760q-17 0-28.5 11.5T541-720v10l-10-4q-15-6-30-3.5T477-700q-8 14-5.5 31.5T491-644l10 4-10 4q-17 7-20 24t6 32q8 14 23.5 17t30.5-3l10-4v10q0 17 11.5 28.5T581-520Zm0-80q-17 0-28.5-11.5T541-640q0-17 11.5-28.5T581-680q17 0 28.5 11.5T621-640q0 17-11.5 28.5T581-600ZM228-85q-33 4-59.5-16T138-154L86-592q-4-33 16.5-58.5T156-681h2q17-3 30.5 9t13.5 30q0 15-10.5 26T166-602h-1l54 438 474-58q17-2 30 8t15 27q2 17-8 29.5T703-143L228-85Zm133-195q-33 0-56.5-23.5T281-360v-440q0-33 23.5-56.5T361-880h440q33 0 56.5 23.5T881-800v440q0 33-23.5 56.5T801-280H361Zm0-80h440v-440H361v440ZM219-164Zm362-416Z"/>
    </Icon>
  );
});

IconMaterialPhotoPrints.displayName = 'OnesyIconMaterialPhotoPrints';

export default IconMaterialPhotoPrints;
