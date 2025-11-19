import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDragHandle = (props: IIcon) => {

  return (
    <Icon
      name='DragHandle'

      short_name='DragHandle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/><path d="M4 9h16v2H4zm0 4h16v2H4z"/>
    </Icon>
  );
};

IconMaterialDragHandle.displayName = 'OnesyIconMaterialDragHandle';

export default IconMaterialDragHandle;
