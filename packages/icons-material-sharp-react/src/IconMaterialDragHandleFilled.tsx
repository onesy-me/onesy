import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDragHandleFilled = (props: IIcon) => {

  return (
    <Icon
      name='DragHandleFilled'

      short_name='DragHandle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z"/>
    </Icon>
  );
};

IconMaterialDragHandleFilled.displayName = 'OnesyIconMaterialDragHandleFilled';

export default IconMaterialDragHandleFilled;
