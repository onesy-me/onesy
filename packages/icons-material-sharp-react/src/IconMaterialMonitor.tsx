import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonitor = (props: IIcon) => {

  return (
    <Icon
      name='Monitor'

      short_name='Monitor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-80l40-40H80v-600h800v600H680l40 40v80H240Zm-80-200h640v-440H160v440Zm0 0v-440 440Z"/>
    </Icon>
  );
};

IconMaterialMonitor.displayName = 'OnesyIconMaterialMonitor';

export default IconMaterialMonitor;
