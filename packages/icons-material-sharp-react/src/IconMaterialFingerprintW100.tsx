import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFingerprintW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FingerprintW100'

      short_name='Fingerprint'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-776q111 0 203.5 48T842-588l-25 16q-60-86-146-131t-192-45q-102 0-187 44.5T143-571l-21-17q68-91 159.5-139.5T479-776Zm0 94q135 0 229.5 90T803-374q0 47-34 79.5T687-262q-49 0-83.5-32.5T569-374q0-35-25.5-59.5T481-458q-38 0-64 24.5T391-374q0 95 58 164t166 101l-8 27q-115-32-179.5-108.5T363-374q0-47 34.5-79.5T481-486q48 0 82 32.5t34 79.5q0 35 26 59.5t64 24.5q37 0 62.5-24.5T775-374q0-117-86-198.5T479-654q-122 0-208 81.5T185-374q0 32 7.5 69.5T217-216l-25 12q-18-48-26.5-90t-8.5-80q0-128 94-218t228-90Zm2-192q64 0 124.5 16T733-807l-12 26q-58-34-116-49.5T481-846q-59 0-116.5 15.5T241-782l-8-25q59-34 120-50.5T481-874Zm0 290q96 0 158 63.5T701-360h-28q0-85-54-140.5T481-556q-80 0-136 53.5T289-374q0 76 26.5 134.5T411-108l-20 20q-70-75-100-140.5T261-374q0-88 64-149t156-61Zm48 357q-32-30-48-70t-16-91h28q0 46 14 81t42 61q26 24 59.5 37t70.5 13q14 0 27.5-2t27.5-4l6 24q-15 4-30 7t-31 3q-42 0-81-15t-69-44Z"/>
    </Icon>
  );
});

IconMaterialFingerprintW100.displayName = 'OnesyIconMaterialFingerprintW100';

export default IconMaterialFingerprintW100;
