import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveFromQueue = (props: IIcon) => {

  return (
    <Icon
      name='RemoveFromQueue'

      short_name='RemoveFromQueue'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-480h320v-80H320v80Zm0 360v-80H80v-640h800v640H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialRemoveFromQueue.displayName = 'OnesyIconMaterialRemoveFromQueue';

export default IconMaterialRemoveFromQueue;
