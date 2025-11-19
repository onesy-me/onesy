import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveFromQueueFilled = (props: IIcon) => {

  return (
    <Icon
      name='RemoveFromQueueFilled'

      short_name='RemoveFromQueue'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-480h320v-80H320v80Zm0 360v-80H80v-640h800v640H640v80H320Z"/>
    </Icon>
  );
};

IconMaterialRemoveFromQueueFilled.displayName = 'OnesyIconMaterialRemoveFromQueueFilled';

export default IconMaterialRemoveFromQueueFilled;
