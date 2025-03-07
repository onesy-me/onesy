import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoAutoMergeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAutoMergeW100'

      short_name='PhotoAutoMerge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-292v-536h302q-4 8-5.5 14.5T585-800H320v480h30q42-44 96.24-68 54.24-24 113.76-24 60 0 114 24t96 68h30v-270q7-1 13.5-4t14.5-6v308H292Zm268-298ZM193-116l-60-494 79-11v29l-48 6 53 439 507-65h10l3 27-544 69Zm22-29Zm471-538 55-154h31l55 154h-27l-12-32h-64l-10 32h-28Zm46-54h49l-25-78-24 78ZM560-384q-48 0-91.5 16T390-320h340q-35-32-78.5-48T560-384Zm-.22-300q39.22 0 66.72 27.28t27.5 66.5q0 39.22-27.28 66.72t-66.5 27.5q-39.22 0-66.72-27.28t-27.5-66.5q0-39.22 27.28-66.72t66.5-27.5Zm.22 28q-27 0-46.5 19.5T494-590q0 27 19.5 46.5T560-524q27 0 46.5-19.5T626-590q0-27-19.5-46.5T560-656Z"/>
    </Icon>
  );
});

IconMaterialPhotoAutoMergeW100.displayName = 'OnesyIconMaterialPhotoAutoMergeW100';

export default IconMaterialPhotoAutoMergeW100;
