import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistantDirectionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantDirectionW100Filled'

      short_name='AssistantDirection'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.56-92Q399-92 328.27-122.46q-70.72-30.47-123-83Q153-258 122.5-328.5 92-399 92-479.56q0-81.45 30.46-152.27 30.47-70.82 83-123.5Q258-808 328.5-838t151.15-30q81.54 0 152.45 30 70.9 30 123.4 82.5T838-632.1q30 70.91 30 152.45 0 80.65-30 151.15t-82.67 123.04q-52.68 52.53-123.5 83Q561.01-92 479.56-92ZM455-249q10 10 23 10t23-10l208-208q10-10 10-24t-10-24L501-713q-10-10-23-10t-23 10L247-505q-10 10-10 24t10 24l208 208Zm-82-258v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-120q0-6.3 3.85-10.15Q352.7-535 359-535h230l-60-60q-4-4-4.5-9.5t4.72-10.72Q534-620 539-620q5 0 10 5l73 73q9 9 9 21t-9 21l-73 73q-4 4-9.5 4.5t-10.72-4.72Q524-432 524-437q0-5 5-10l60-60H373Z"/>
    </Icon>
  );
});

IconMaterialAssistantDirectionW100Filled.displayName = 'OnesyIconMaterialAssistantDirectionW100Filled';

export default IconMaterialAssistantDirectionW100Filled;
