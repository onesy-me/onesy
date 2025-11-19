import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubscriptions = (props: IIcon) => {

  return (
    <Icon
      name='Subscriptions'

      short_name='Subscriptions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-560h800v560H80Zm80-80h640v-400H160v400Zm240-40 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280ZM160-160v-400 400Z"/>
    </Icon>
  );
};

IconMaterialSubscriptions.displayName = 'OnesyIconMaterialSubscriptions';

export default IconMaterialSubscriptions;
