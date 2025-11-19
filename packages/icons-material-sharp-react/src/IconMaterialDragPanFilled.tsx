import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDragPanFilled = (props: IIcon) => {

  return (
    <Icon
      name='DragPanFilled'

      short_name='DragPan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 310-250l57-57 73 73v-206H235l73 72-58 58L80-480l169-169 57 57-72 72h206v-206l-73 73-57-57 170-170 170 170-57 57-73-73v206h205l-73-72 58-58 170 170-170 170-57-57 73-73H520v205l72-73 58 58L480-80Z"/>
    </Icon>
  );
};

IconMaterialDragPanFilled.displayName = 'OnesyIconMaterialDragPanFilled';

export default IconMaterialDragPanFilled;
