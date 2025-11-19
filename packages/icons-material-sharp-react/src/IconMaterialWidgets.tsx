import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidgets = (props: IIcon) => {

  return (
    <Icon
      name='Widgets'

      short_name='Widgets'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M666-440 440-666l226-226 226 226-226 226Zm-546-80v-320h320v320H120Zm400 400v-320h320v320H520Zm-400 0v-320h320v320H120Zm80-480h160v-160H200v160Zm467 48 113-113-113-113-113 113 113 113Zm-67 352h160v-160H600v160Zm-400 0h160v-160H200v160Zm160-400Zm194-65ZM360-360Zm240 0Z"/>
    </Icon>
  );
};

IconMaterialWidgets.displayName = 'OnesyIconMaterialWidgets';

export default IconMaterialWidgets;
