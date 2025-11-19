import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMaximize = (props: IIcon) => {

  return (
    <Icon
      name='Maximize'

      short_name='Maximize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-760v-80h640v80H160Z"/>
    </Icon>
  );
};

IconMaterialMaximize.displayName = 'OnesyIconMaterialMaximize';

export default IconMaterialMaximize;
