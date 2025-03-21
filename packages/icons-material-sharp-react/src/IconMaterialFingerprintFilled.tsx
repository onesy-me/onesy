import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFingerprintFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FingerprintFilled'

      short_name='Fingerprint'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-781q113 0 206 48.5T850-588l-32 24q-63-88-147.5-132.5T481-741q-104 0-188 45T146-562l-32-23q71-97 163.5-146.5T481-781Zm0 94q137 0 233 91t96 222q0 49-35.5 83T688-257q-52 0-88-34t-36-83q0-32-24-55t-59-23q-35 0-59 23t-24 55q0 95 57 160.5T623-115l-10 39q-122-31-188.5-108.5T358-374q0-49 36-83.5t87-34.5q51 0 87 34.5t36 83.5q0 32 24.5 55t59.5 23q34 0 58-23t24-55q0-114-84-194t-204-80q-120 0-204 80t-84 193q0 35 7.5 75t24.5 88l-36 14q-18-46-27-90t-9-86q0-131 95-222t232-91Zm0-192q65 0 127 16t133 52l-16 37q-69-35-126.5-50T481-839q-66 0-122 16t-117 51l-18-35q66-37 128-54.5T481-879Zm0 289q100 0 163.5 66T708-354h-40q0-88-52-142t-135-54q-77 0-131 51.5T296-374q0 77 27 134.5T420-109l-28 28q-75-78-105.5-143.5T256-374q0-90 65.5-153T481-590Zm45 367q-32-30-49-73.5T460-394h40q0 45 14 82t40 61q26 23 58.5 35.5T680-203q17 0 33-3.5t31-9.5l7 39q-17 8-35 11t-36 3q-44 0-83.5-15.5T526-223Z"/>
    </Icon>
  );
});

IconMaterialFingerprintFilled.displayName = 'OnesyIconMaterialFingerprintFilled';

export default IconMaterialFingerprintFilled;
