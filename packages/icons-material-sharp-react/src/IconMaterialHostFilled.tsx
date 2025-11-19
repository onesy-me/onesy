import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHostFilled = (props: IIcon) => {

  return (
    <Icon
      name='HostFilled'

      short_name='Host'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-720h360v720H80Zm440 0v-720h360v720H520ZM200-360h120v-80H200v80Zm440 0h120v-80H640v80ZM200-480h120v-80H200v80Zm440 0h120v-80H640v80ZM200-600h120v-80H200v80Zm440 0h120v-80H640v80Z"/>
    </Icon>
  );
};

IconMaterialHostFilled.displayName = 'OnesyIconMaterialHostFilled';

export default IconMaterialHostFilled;
